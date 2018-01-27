import { PureComponent } from 'react';
import Card from 'components/presentation/card';
import { callService } from 'libs/service-caller';
import moment from 'moment';

export default class DashboardPage extends PureComponent {

    constructor(props) {
        super(props);

        this.renderLoading = this.renderLoading.bind(this);
        this.renderCulebraList = this.renderCulebraList.bind(this);
        this.renderCulebraItem = this.renderCulebraItem.bind(this);

        this.state = {
            fetching: false,
            culebras: [],
            error: null
        };
    }

    async componentDidMount() {
        this.setState({ fetching: true });
        try {
            const { result } = await this.callCulebraListService();
            this.setState({ culebras: result.data, fetching: false });
        } catch (error) {
            this.setState({ error, fetching: false });
        }
    }

    render() {
        const content = (this.state.fetching) ? this.renderLoading() : this.renderCulebraList();
        return (
            <div className="row">
                <div className="col-md-12">
                    <Card title="Culebras">{content}</Card>
                </div>
            </div>
        );
    }

    renderLoading() {
        return <div>Feching Culebras ...</div>;
    }

    renderCulebraList() {
        return (
            <table class="table">
                <thead class="text-primary">
                    <tr><th>Name</th>
                        <th>Email</th>
                        <th>Cellphone</th>
                        <th>Amount Due</th>
                        <th>Loan Date</th>
                        <th>Notification days</th>
                    </tr></thead>
                <tbody>
                    {this.state.culebras.map(this.renderCulebraItem)}
                </tbody>
            </table>
        );
    }

    renderCulebraItem(culebra, index) {
        return (
            <tr key={index}>
                <td>{culebra.name}</td>
                <td>{culebra.email}</td>
                <td>{this.formatPhoneNumber(culebra.cellphone)}</td>
                <td class="text-primary">{`$ ${culebra.amountDue.toFixed(2)}`}</td>
                <td>{moment(culebra.loanDate).format('MMMM Do YYYY')}</td>
                <td>{culebra.notificationDays}</td>
            </tr>
        );
    }

    formatPhoneNumber (phoneNumber) {
        return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    }

    callCulebraListService() {
        const URL = 'api/culebras';
        return callService(URL);
    }
}
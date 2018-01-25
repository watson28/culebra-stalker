export default (props) => {
    return (
        <div className="card">
            <div className="card-header" data-background-color={props.color || 'purple'}>
                <h4 className="title">{props.title}</h4>
                {(props.subContent) ? <p className="category">{props.subContent}</p> : null}
            </div>
            <div className={'card-content ' + (props.cardContentClasses || '')}>
                {props.children}
            </div>
        </div>
    );
};
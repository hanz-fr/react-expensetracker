const Container = (props) => {
    /* default classname/styling for container */
    const classes = 'p-5 border-[#B4B4B4] ' + props.className;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Container;
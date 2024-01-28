import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    // 컴포넌트 마운트시
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called.`);
    }
    // 컴포넌트 변경시
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called.`);
    }
    // 컴포넌트 언마운트시
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called.`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;
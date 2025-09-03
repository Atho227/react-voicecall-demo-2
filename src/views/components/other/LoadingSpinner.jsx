import React from "react";

const LoadingSpinner = () => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.spinner}></div>
        </div>
    );
};

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        padding: "32px"
    },
    spinner: {
        width: "32px",
        height: "32px",
        border: "4px solid rgba(0,0,0,0.1)",
        borderTop: "4px solid #3D55CC",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
    }
};

const styleSheet = document.styleSheets[0];
if (styleSheet) {
    const keyframes =
        `@keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }`;
    try {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    } catch (e) {
    }
}

export default LoadingSpinner;

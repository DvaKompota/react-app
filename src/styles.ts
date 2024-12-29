// src/styles.ts
import React from 'react';

export const colors = {
    baseGreen: '#00FF00',
    blackColor: '#000000',
};

export const appStyles = {
    container: {
        backgroundColor: colors.blackColor,
        height: '100%',
        width: '100%',
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
};

export const buttonStyles = {
    base: {
        color: colors.baseGreen,
        backgroundColor: colors.blackColor,
        fontSize: '50px',
        border: `2px solid ${colors.baseGreen}`,
        borderRadius: '5px',
        padding: '10px 20px',
        width: '200px',
        height: '80px',
        textAlign: 'center' as const,
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
    }
};

// We'll use a different approach for hover
export const hoverStyle = {
    backgroundColor: '#00FF004D' // 30% opacity of baseGreen
};

export const styled = (element: React.ElementType, styles: React.CSSProperties) => {
    return React.forwardRef((props: React.HTMLAttributes<HTMLElement>, ref: React.Ref<HTMLElement>) => {
        return React.createElement(element, { ...props, ref, style: { ...styles, ...props.style } });
    });
};
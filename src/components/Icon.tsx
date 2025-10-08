export function IconHome(props: any) {
    return (
        <svg
            width="21px"
            height="21px"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="matrix(0 1 1 0 2.5 2.5)"
            >
                <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />
                <circle cx={8} cy={8} fill="currentColor" r={2} />
                <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
            </g>
        </svg>
    );
}

export function IconPlus(props: any) {
    return (
        <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            id="plus"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color"
            {...props}
        >
            <path
                id="primary"
                d="M5,12H19M12,5V19"
                style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                }}
            />
        </svg>
    );
}

export function IconMinus(props: any) {
    return (
        <svg
            fill="#000000"
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            id="minus"
            data-name="Line Color"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line-color"
            {...props}
        >
            <line
                id="primary"
                x1={19}
                y1={12}
                x2={5}
                y2={12}
                style={{
                    fill: "none",
                    stroke: "rgb(0, 0, 0)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                }}
            />
        </svg>
    );
}

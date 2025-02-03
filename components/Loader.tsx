interface LoaderParams {
    bgWidth?: string;
    bgHeight?: string;
    width: string;
    height: string;
    color: string;
}

export function Loader({ bgWidth, bgHeight, width, height, color }: LoaderParams) {
    return (
        <div
            className="spinnerContainer"
            style={{ width: `${bgWidth}`, height: `${bgHeight}` }}
        >
            <div
                className="loadingSpinner"
                style={{
                    width: `${width}`,
                    height: `${height}`,
                    borderTop: `2px solid ${color}`,
                    borderRight: `2px solid ${color}`,
                }}
            ></div>
        </div>
    );
}

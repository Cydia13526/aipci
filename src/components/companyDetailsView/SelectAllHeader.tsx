import React from "react";
import {IHeaderParams} from "ag-grid-community";

export class SelectAllHeader extends React.Component<
    IHeaderParams & { onSelectAll: (checked: boolean) => void }
> {
    state = { checked: false };

    componentDidMount() {
        this.updateCheckedState();
    }

    componentDidUpdate(prevProps: typeof this.props) {
        if (prevProps.api !== this.props.api) {
            this.updateCheckedState();
        }
    }

    updateCheckedState = () => {
        const rowCount = this.props.api.getDisplayedRowCount();
        const selectedNodes = this.props.api.getSelectedNodes();
        this.setState({ checked: rowCount > 0 && selectedNodes.length === rowCount });
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        this.setState({ checked });
        this.props.onSelectAll(checked);
    };

    render() {
        return (
            <div className="flex items-center justify-center h-full">
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    aria-label="Select all holdings"
                />
            </div>
        );
    }
}
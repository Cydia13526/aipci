import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Holding } from "../../types/Company";
import { SelectAllHeader } from "./SelectAllHeader";

type MarketableSecurityGridProps = {
    data: Holding[];
    handleSelectHolding: (ids: number[]) => void;
    toggleFavorite: (id: number) => void;
    setSelectedHolding: (holding: Holding | null) => void;
    gridRef: any;
};

const MarketableSecurityGrid: React.FC<MarketableSecurityGridProps> = ({
                                                                           data,
                                                                           handleSelectHolding,
                                                                           toggleFavorite,
                                                                           setSelectedHolding,
                                                                           gridRef,
                                                                       }) => {
    const [selectedHoldings, setSelectedHoldings] = React.useState<number[]>([]);

    const handleSelectAll = React.useCallback((checked: boolean) => {
        if (gridRef.current?.api) {
            if (checked) {
                gridRef.current.api.selectAll();
            } else {
                gridRef.current.api.deselectAll();
            }
            const selectedNodes = gridRef.current.api.getSelectedNodes();
            const selectedIds = selectedNodes.map((node: any) => node.data.id);
            setSelectedHoldings(selectedIds);
            handleSelectHolding(selectedIds);
        }
    }, [gridRef, handleSelectHolding]);

    const columnDefs: ColDef<Holding>[] = React.useMemo(
        () => [
            {
                headerName: "",
                minWidth: 60,
                maxWidth: 60,
                pinned: "left",
                cellRenderer: (params: any) => (
                    <div className="flex items-center justify-center h-full">
                        <input
                            type="checkbox"
                            checked={selectedHoldings.includes(params.data.id)}
                            onChange={() => {
                                const id = params.data.id;
                                const newSelectedHoldings = selectedHoldings.includes(id)
                                    ? selectedHoldings.filter((holdingId) => holdingId !== id)
                                    : [...selectedHoldings, id];
                                setSelectedHoldings(newSelectedHoldings);
                                handleSelectHolding(newSelectedHoldings);
                            }}
                            aria-label={`Select holding ${params.data.name}`}
                        />
                    </div>
                ),
                headerComponent: SelectAllHeader,
                headerComponentParams: { onSelectAll: handleSelectAll },
                headerClass: "flex items-center justify-center h-full",
                sortable: false,
                filter: false,
            },
            {
                headerName: "Favorite",
                field: "isFavorite",
                width: 80,
                pinned: "left",
                cellRenderer: (params: { data: Holding }) => (
                    <button
                        onClick={() => toggleFavorite(params.data.id)}
                        aria-label={
                            params.data.isFavorite
                                ? `Remove ${params.data.name} from favorites`
                                : `Add ${params.data.name} to favorites`
                        }
                        className="text-yellow-500 hover:text-yellow-600"
                    >
                        {params.data.isFavorite ? "★" : "☆"}
                    </button>
                ),
                sortable: true,
                filter: false,
            },
            {
                headerName: "Name",
                field: "name",
                width: 350,
                pinned: "left",
                sortable: true,
                cellRenderer: (params: { data: Holding }) => (
                    <button
                        onClick={() => setSelectedHolding(params.data)}
                        className="text-blue-600 hover:underline"
                        aria-label={`View details for ${params.data.name}`}
                    >
                        {params.data.name}
                    </button>
                ),
            },
            {
                headerName: "Type",
                field: "type",
                sortable: true,
            },
            {
                headerName: "Relationship",
                field: "relationship",
                sortable: true,
            },
            {
                headerName: "Account Shares",
                field: "accountShares",
                sortable: true,
                valueFormatter: (params) => params.value?.toLocaleString() ?? "",
            },
            {
                headerName: "Carrying Amount",
                field: "carryingAmount",
                sortable: true,
                valueFormatter: (params) => `$${params.value?.toLocaleString() ?? 0}`,
            },
            {
                headerName: "Ownership (%)",
                field: "ownership",
                sortable: true,
                valueGetter: (params) => (params.data?.ownership as number) * 100,
                valueFormatter: (params) => `${params.value?.toFixed(2) ?? 0}%`,
                colId: "ownershipPercentage",
            },
            {
                headerName: "Classification",
                field: "classification",
                sortable: true,
            },
            {
                headerName: "Fair Value",
                field: "fairValue",
                sortable: true,
                valueFormatter: (params) => `$${params.value?.toLocaleString() ?? 0}`,
            },
        ],
        [handleSelectHolding, handleSelectAll, selectedHoldings, toggleFavorite, setSelectedHolding]
    );

    const defaultColDef: ColDef<Holding> = React.useMemo(
        () => ({
            sortable: true,
            filter: true,
            resizable: true,
            editable: true,
            flex: 1,
            cellStyle: {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontFamily: "Inter, Roboto, sans-serif",
                fontSize: "16px",
            },
        }),
        []
    );

    const onSelectionChanged = React.useCallback(() => {
        if (gridRef.current?.api) {
            const selectedNodes = gridRef.current.api.getSelectedNodes();
            const selectedIds = selectedNodes.map((node: any) => node.data.id);
            setSelectedHoldings(selectedIds);
            handleSelectHolding(selectedIds);
        }
    }, [gridRef, handleSelectHolding]);

    return (
        <div className="ag-theme-quartz w-full h-full">
            <AgGridReact<Holding>
                ref={gridRef}
                rowData={data}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                onSelectionChanged={onSelectionChanged}
                rowSelection="multiple"
                suppressRowClickSelection={true}
                rowHeight={40}
                headerHeight={40}
                multiSortKey="ctrl"
                domLayout="normal"
            />
        </div>
    );
};

export default MarketableSecurityGrid;
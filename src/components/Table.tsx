// https://mui.com/x/react-data-grid/
import serverGetPokemons from "@/utils/serverGetPokemons";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { renderProgress } from "./ProgressBar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "img",
    headerName: "Image",
    sortable: false,
    width: 70,
    renderCell: (params) => (
      <img style={{ height: 50, width: "auto" }} src={params.value} />
    ),
  },
  { field: "name", headerName: "Name", width: 130 },
  { field: "height", headerName: "Height", width: 130 },
  { field: "weight", headerName: "Weight", width: 130 },
  { field: "type", headerName: "Type", sortable: false, width: 130 },
  {
    field: "weeknesses",
    headerName: "Weeknesses",
    sortable: false,
    width: 200,
  },
  {
    field: "spawn_chance",
    headerName: "Spawn Chance",
    renderCell: renderProgress,
    type: "number",
    width: 130,
  },
  { field: "avg_spawns", headerName: "Average Spawns", width: 130 },
];

const rows = await serverGetPokemons();

export default function Table() {
  return (
    <div style={{ height: 650, width: "80%" }}>
      <DataGrid
        sx={{}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

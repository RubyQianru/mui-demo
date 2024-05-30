// Latest document:
// https://mui.com/x/react-data-grid/
import serverGetPokemons from "@/utils/serverGetPokemons";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { renderProgress } from "./ProgressBar";

// Columns are objects defined with a set of attributes of the GridColDef interface.
// They are mapped to the rows through their field property.
const columns: GridColDef[] = [
  {
    field: "id",
    headerClassName: "super-app-theme--header",
    headerName: "ID",
    width: 70,
  },
  {
    field: "img",
    headerClassName: "super-app-theme--header",
    headerName: "Image",
    sortable: false,
    width: 70,
    // User renderCell attribute for rendering React component within cells. Same as Ant Design render attribute.
    // If the React component consists of multiply lines, please do create a seperate function. Example: renderProgress
    renderCell: (params) => (
      <img style={{ height: 50, width: "auto" }} src={params.value} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
  },
  {
    field: "height",

    headerName: "Height",
    width: 130,
  },
  {
    field: "weight",
    headerName: "Weight",
    width: 130,
  },
  {
    field: "type",
    headerName: "Type",
    sortable: false,
    width: 130,
  },
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
  {
    field: "avg_spawns",
    headerName: "Average Spawns",
    width: 130,
  },
];

// Rows are key-value pair objects, mapping column names as keys with their values.
// You should also provide an id property on each row to allow delta updates and better performance.
// Why does React needs keys: https://react.dev/learn/rendering-lists#why-does-react-need-keys.
const rows = await serverGetPokemons();

export default function Table() {
  return (
    <div style={{ height: 650, width: "77%" }}>
      <DataGrid
        // Use sx attribute for styling. Do not use style attribute.
        // If you are not sure about which class to modify, use Chrome dev tool to inspect HTML elements (ctrl+shift+C)
        sx={{
          ".MuiDataGrid-columnHeader": {
            backgroundColor: "rgba(118, 185, 0, 0.55)",
          },
        }}
        autoHeight={true}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: [],
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        // Use slots attribute for the top toolbar including universal search.
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}

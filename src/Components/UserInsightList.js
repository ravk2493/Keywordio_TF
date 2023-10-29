import { DataGrid } from "@mui/x-data-grid";

const UserInsightsList = ({ pyrows, pycolumns }) => (
  <DataGrid
    border="1px solid #ccc"
    rows={pyrows}
    columns={pycolumns}
    hideFooter
    hideFooterPagination // Hide the pagination options
    sx={{ height: "300px" }}
  />
);

export default UserInsightsList;

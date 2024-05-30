# mui-demo

[Main Documentation](https://mui.com/material-ui/getting-started/)

Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.

[MUI X - Overview](https://mui.com/x/introduction/)

MUI X is a collection of advanced React UI components for complex use cases. Use the native integration with Material UI or extend your design system.

This demo will be covering basics of MUI and what features of MUI we might consider.

## Installation (Yarn)

```
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/material-core
yarn add @mui/x-data-grid
yarn add @mui/x-charts
```

## DataGrid (Table)

[Data Grid OverView](https://mui.com/x/react-data-grid/)

[Data Grid Demo](https://mui.com/x/react-data-grid/demo/)

### Row

Rows are key-value pair objects, mapping column names as keys with their values. You should also provide an id property on each row to allow delta updates and better performance.

[Why does React needs keys](https://react.dev/learn/rendering-lists#why-does-react-need-keys)

### Column

[Column Definition](https://mui.com/x/react-data-grid/column-definition/)

Columns are objects defined with a set of attributes of the GridColDef interface. They are mapped to the rows through their field property.

- field: Are mapped to key of the row object.
- headerName: Column title.
- type: Boolean type is rendered in ☑️ | ✖️ format. Action type allows you to insert any icons (e.g. ✍️Edit button).
- sortable(true | false): Use sortable attribute to define whether data field is sortable on click.
- editable(true | false): Use editable attribute to define whether data field is editable on click. [Editing](https://mui.com/x/react-data-grid/editing/)
- renderCell: User renderCell attribute for rendering React component within cells. Same as Ant Design render attribute. If the React component consists of multiply lines, please do create a seperate function. Example: renderProgress.

### DataGrid

- getRowHeight: [Row Height](https://mui.com/x/react-data-grid/row-height/)

```jsx
<DataGrid getRowHeight={() => "auto"} /> // Dynamic row height
```

- autoHeight: The autoHeight prop enables the Data Grid to adjust its size based on its content. This means that the Data Grid's height will be determined by the number of rows, ensuring that all rows will be visible to the user simultaneously. [Layout](https://mui.com/x/react-data-grid/layout/)
- slots: Quick filter allows filtering rows by multiple columns with a single text input. [Quick filter](https://mui.com/x/react-data-grid/filtering/quick-filter/), Easily export the rows in various file formats such as CSV, Excel, or PDF. [Export](https://mui.com/x/react-data-grid/export/)
- pageSizeOptions: [Pagination](https://mui.com/x/react-data-grid/pagination/)
- checkboxSelection: [Row Selection](https://mui.com/x/react-data-grid/row-selection/)

### Styling

- sx: Use sx attribute to style MUI components! Do not use tailwind CSS to directly style your component.

Tips: Use Chrome inspect tool to find the class nested inside of MUI component.


## Charts

[Charts Overview](https://mui.com/x/react-charts/)

[Charts Demo](https://mui.com/x/react-charts/)

### Line Chart

[Lines Demo](https://mui.com/x/react-charts/line-demo/)

### Pie Chart

[Pie Demo](https://mui.com/x/react-charts/pie-demo/)

## Button

[Button](https://mui.com/material-ui/react-button/)

- variant(text | contained | outlined)
- size(small | medium | large)

## Other Tools

### Tailwind CSS

[Tailwind CSS](https://tailwindcss.com/)

```
yarn add tailwindcss@latest
```

Before:

```jsx
<main
  style={{
    width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
  }}
>
  <Table />
</main>
```

After:

```jsx
<main className="w-full h-[80%] flex justify-center">
  <Table />
</main>
```

## Questions

'use strict';

//TODO: Why is this even used?
//      Could probalby set something up in the reducers to send the visible columns based on the properties.
//      At the very least, make the signature (column, { columnProperties, ignoredColumns })
const ColumnHelper = {
  isColumnVisible(columnProperties,ignoredColumns, column) {
    if(!columnProperties && !ignoredColumns) { return true; }

    if(!columnProperties) {
      return !ignoredColumns.indexOf(column) > 0
    }

    return (
      ((columnProperties.hasOwnProperty(column) && !columnProperties[column].hidden) ||
      Object.getOwnPropertyNames(columnProperties).length === 0) &&
      ignoredColumns.indexOf(column) < 0
    );
  },

  //TODO: Not sure I like this method
  //      It seems like it could go elsewhere

  //This gets one column property object from the global property object
  getColumnPropertyObject(columnProperties, columnName) {
    return columnProperties.hasOwnProperty(columnName) ?
      columnProperties[columnName] :
      null;
  }
};

export default ColumnHelper;

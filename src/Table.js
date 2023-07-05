import styles from "./Table.module.css";

function Table({ data }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Central</th>
            <th>East</th>
            <th>North</th>
            <th>South</th>
            <th>West</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.PSI.central}</td>
            <td>{data.PSI.east}</td>
            <td>{data.PSI.north}</td>
            <td>{data.PSI.south}</td>
            <td>{data.PSI.west}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;

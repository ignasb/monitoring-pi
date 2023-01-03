const Table = ({ title, headers, data }) => {
    const getDataByKey = (key, row) => row[key];

    return (
        <table>
            <caption>{title}</caption>
            <thead>
                <tr>
                    {headers.map((header, i) => (<td key={i}>{header.title}</td>))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {headers.map((header, i) => (<td key={i}>{row[header.key]}</td>))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;

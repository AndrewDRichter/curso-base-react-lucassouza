
export function Header() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#3d3d56', color: '#fff', fontWeight: 'bold', fontFamily: 'monospace', fontSize: 24, width: '100%' }}>
            <h1>App Logo</h1>
            <ul style={{ display: 'flex', gap: 20, listStyleType: 'none' }}>
                <li>
                    <a style={{ cursor: 'pointer' }}>Home</a>
                </li>
                <li>
                    <a style={{ cursor: 'pointer' }}>Products</a>
                </li>
                <li>
                    <a style={{ cursor: 'pointer' }}>About</a>
                </li>
            </ul>
        </div>
    )
}
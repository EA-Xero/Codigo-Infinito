import Badge from 'react-bootstrap/Badge';
function Tags ({bg,ba}) {
    return (
        <>
        <h4>
            <Badge bg={bg}>{ba}</Badge>
        </h4>
        </>
    )
}
export default Tags
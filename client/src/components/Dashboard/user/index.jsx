const User = (props) => {
    const { name,email,phoneNumber } = props.data;

    return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phoneNumber}</td>
      </tr>
    );
}
export default User;
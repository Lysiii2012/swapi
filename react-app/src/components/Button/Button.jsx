function Button({ onClick, disabled }) {
    return (
      <button onClick={onClick} disabled={disabled}>
        Get info
      </button>
    );
  }
  
  export default Button;
  
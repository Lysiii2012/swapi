function Input({ value, type, onInputChange }) {
    const handleInputChange = (event) => {
        onInputChange(event.target.value);
    };

    return (
        <input 
            type={type} 
            placeholder="people/1/" 
            value={value} 
            onChange={handleInputChange}
        />
    );
}

export default Input;

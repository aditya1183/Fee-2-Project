import React from 'react'

function Editform() {
    const [newTitle, setNewTitle] = useState(title);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setNewTitle("");
        setIsEditingToFalse();
    };
  return (
    <form onSubmit={handleSubmit}>
        <input
                type="text"
                value={newTitle}
                onChange={(e) => {
                    setNewTitle(e.target.value);
                }}
            />
            <input type="submit" value="Done" />
    </form>
  )
}

export default Editform
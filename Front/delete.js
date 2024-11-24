
const deleteProduct = async (id) => {
    const response = await fetch("http://localhost:4000/api/workouts/");
        method: 'DELETE'
    };
    if (response.ok) {
        Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "The product has been removed from the menu.",
        });
        document.getElementById(id).remove();  // Assuming id is set as the card's ID
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops... 🙁",
            text: "Something went wrong! Please try again later!",
        });
    }

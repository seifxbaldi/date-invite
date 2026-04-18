document.getElementById('startBtn').addEventListener('click', async () => {
    const name = document.getElementById('userName').value;

    if (!name) {
        alert("Please enter a name!");
        return;
    }

    // 1. The "Would you like to be my date?" question
    const { value: accept } = await Swal.fire({
        title: `YAY! IT'S ${name.toUpperCase()}! ❤️`,
        text: "Would you like to be my date?",
        imageUrl: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueW94bmZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6eGZ6JnB0PW0mY3Q9cw/MDJ9u19Xp4GZ2/giphy.gif', // Add a cute GIF link here
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No, sorry 😢',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
    });

    if (accept) {
        // 2. Choose the type of date
        const { value: dateType } = await Swal.fire({
            title: 'Awesome! ✨',
            text: 'What type of date do you prefer?',
            input: 'select',
            inputOptions: {
                'Romantic Dinner': 'Romantic Dinner',
                'Outdoor Adventure': 'Outdoor Adventure',
                'Chill Hangout': 'Chill Hangout'
            },
            inputPlaceholder: 'Choose a type',
            showCancelButton: true
        });

        if (dateType) {
            // 3. Final Confirmation
            Swal.fire({
                icon: 'success',
                title: 'It\'s a Date!',
                text: `I can't wait to see you for a ${dateType}!`,
                confirmButtonText: 'Can\'t wait!'
            });
        }
    }
});
document.getElementById('submit-btn').addEventListener('click', function() {
    const userCode = document.getElementById('code-input').value;
    let feedback = document.getElementById('feedback');

    try {
        // Evaluating the user's code safely
        const sumFunction = new Function('return ' + userCode)();
        
        // Testing the function with some test cases
        if (typeof sumFunction === 'function' && sumFunction(2, 3) === 5 && sumFunction(-1, 1) === 0) {
            feedback.textContent = 'Congratulations! Your solution is correct!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Oops! Your solution is incorrect. Try again.';
            feedback.style.color = 'red';
        }
    } catch (error) {
        feedback.textContent = 'There was an error in your code. Please check and try again.';
        feedback.style.color = 'red';
    }
});

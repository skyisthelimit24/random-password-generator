// Random Password Generator

const generateBtn = document.getElementById("generateBtn");

const resultText = document.getElementById("resultText");

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()+-=_";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (length <= 0) {
    return `(Password length must be at least 1)`;
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of character needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  resultText.textContent = password;

  return password;
}

// Function to handle password generation logic
function handlePasswordGeneration() {
  let passwordLength = digitInput.value;

  if (!passwordLength || isNaN(passwordLength)) {
    passwordLength = 12; // Default length
  } else {
    passwordLength = parseInt(passwordLength);
  }

  const includeLowercase = true;
  const includeUppercase = true;
  const includeNumbers = true;
  const includeSymbols = true;

  generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
}

// Trigger password generation when the button is clicked
generateBtn.addEventListener("click", handlePasswordGeneration);

// Trigger password generation when "Enter" is pressed while in the input field
digitInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handlePasswordGeneration();
  }
});

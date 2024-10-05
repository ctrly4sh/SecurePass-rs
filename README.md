
# Password Generator TUI

A terminal-based (TUI) password generator built with Rust. The app allows users to create secure passwords by selecting options like length, uppercase, numbers, and symbols through an interactive text interface.

## Features
  - Generate secure passwords
  - Customize password length
  - Toggle the inclusion of:
    - Uppercase letters
    - Numbers
    - Special characters
  - Copy generated password to clipboard
  - Interactive TUI for easy navigation

## Installation

1. Clone the repository:

     git clone https://github.com/yourusername/password-generator-tui.git
     cd password-generator-tui
     
2. Install dependencies:
     cargo build
   
4. Run the app:
     cargo run
   
## Usage
  - Use the keyboard to navigate the interface.
  - Select options to customize your password generation.
  - The password will be displayed and can be copied to the clipboard.

## Dependencies
  - [rand](https://docs.rs/rand/) - For generating random characters
  - [tui-rs](https://docs.rs/tui/) - For building the TUI
  - [crossterm](https://docs.rs/crossterm/) - For terminal control
  - [clipboard](https://docs.rs/clipboard/) - For copying the password to the clipboard

## License
This project is licensed under the MIT License.

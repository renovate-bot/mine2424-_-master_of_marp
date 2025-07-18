#!/bin/bash

# Install script for global Marp CLI access
# This creates a global command 'marp' that can be used from anywhere

set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
MARP_SCRIPT="$SCRIPT_DIR/marp"

print_color() {
    local color=$1
    shift
    echo -e "${color}$@${NC}"
}

print_color "$BLUE" "🚀 Marp CLI Global Installer"
echo

# Check if script exists
if [ ! -f "$MARP_SCRIPT" ]; then
    print_color "$RED" "Error: marp script not found at $MARP_SCRIPT"
    exit 1
fi

# Determine install location
if [ -w "/usr/local/bin" ]; then
    INSTALL_DIR="/usr/local/bin"
elif [ -d "$HOME/.local/bin" ]; then
    INSTALL_DIR="$HOME/.local/bin"
elif [ -d "$HOME/bin" ]; then
    INSTALL_DIR="$HOME/bin"
else
    print_color "$YELLOW" "Creating $HOME/.local/bin for installation"
    mkdir -p "$HOME/.local/bin"
    INSTALL_DIR="$HOME/.local/bin"
fi

# Create symlink
print_color "$BLUE" "Installing to: $INSTALL_DIR/marp"

if [ -L "$INSTALL_DIR/marp" ] || [ -f "$INSTALL_DIR/marp" ]; then
    print_color "$YELLOW" "Existing marp command found. Replace? (y/n): "
    read -r replace
    if [[ "$replace" =~ ^[Yy]$ ]]; then
        rm -f "$INSTALL_DIR/marp"
    else
        print_color "$RED" "Installation cancelled"
        exit 1
    fi
fi

ln -s "$MARP_SCRIPT" "$INSTALL_DIR/marp"
print_color "$GREEN" "✅ Symlink created"

# Check if directory is in PATH
if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
    print_color "$YELLOW" "⚠️  $INSTALL_DIR is not in your PATH"
    echo
    print_color "$BLUE" "Add it to your PATH by adding this line to your shell config:"
    
    # Detect shell
    if [ -n "$ZSH_VERSION" ]; then
        SHELL_CONFIG="$HOME/.zshrc"
    elif [ -n "$BASH_VERSION" ]; then
        SHELL_CONFIG="$HOME/.bashrc"
    else
        SHELL_CONFIG="your shell configuration file"
    fi
    
    echo
    echo "    export PATH=\"\$PATH:$INSTALL_DIR\""
    echo
    print_color "$BLUE" "Add to $SHELL_CONFIG? (y/n): "
    read -r add_to_path
    
    if [[ "$add_to_path" =~ ^[Yy]$ ]]; then
        echo "" >> "$SHELL_CONFIG"
        echo "# Marp CLI" >> "$SHELL_CONFIG"
        echo "export PATH=\"\$PATH:$INSTALL_DIR\"" >> "$SHELL_CONFIG"
        print_color "$GREEN" "✅ Added to $SHELL_CONFIG"
        print_color "$YELLOW" "🔄 Reload your shell or run: source $SHELL_CONFIG"
    fi
fi

# Create additional convenience scripts
print_color "$BLUE" "Install additional tools? (y/n): "
read -r install_extras

if [[ "$install_extras" =~ ^[Yy]$ ]]; then
    # Install marp-quick
    if [ -f "$SCRIPT_DIR/marp-quick" ]; then
        ln -sf "$SCRIPT_DIR/marp-quick" "$INSTALL_DIR/marp-quick"
        print_color "$GREEN" "✅ Installed marp-quick"
    fi
    
    # Install marp-ai
    if [ -f "$SCRIPT_DIR/marp-ai" ]; then
        ln -sf "$SCRIPT_DIR/marp-ai" "$INSTALL_DIR/marp-ai"
        print_color "$GREEN" "✅ Installed marp-ai"
    fi
    
    # Install marp-startup
    if [ -f "$SCRIPT_DIR/marp-startup" ]; then
        ln -sf "$SCRIPT_DIR/marp-startup" "$INSTALL_DIR/marp-startup"
        print_color "$GREEN" "✅ Installed marp-startup"
    fi
fi

# Test installation
echo
print_color "$BLUE" "🧪 Testing installation..."

if command -v marp &> /dev/null; then
    print_color "$GREEN" "✅ marp command is available globally!"
    echo
    print_color "$CYAN" "Try these commands:"
    echo "  marp help           - Show help"
    echo "  marp list           - List presentations"
    echo "  marp new            - Create new presentation"
    echo "  marp dev            - Start development mode"
    if [[ "$install_extras" =~ ^[Yy]$ ]]; then
        echo "  marp-quick          - Quick presentation from clipboard"
        echo "  marp-ai             - AI-powered presentation generator"
    fi
else
    print_color "$YELLOW" "⚠️  marp command not found in PATH"
    print_color "$YELLOW" "   Please reload your shell or add $INSTALL_DIR to PATH"
fi

echo
print_color "$GREEN" "✨ Installation complete!"
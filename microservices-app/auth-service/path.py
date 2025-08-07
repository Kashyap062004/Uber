import os

def print_directory_structure(startpath, exclude_dirs=None):
    """
    Prints the directory structure starting from 'startpath',
    excluding specified directories.

    Args:
        startpath (str): The path to the root directory.
        exclude_dirs (list): A list of directory names to exclude.
                             Defaults to ['node_modules'].
    """
    if exclude_dirs is None:
        exclude_dirs = ['node_modules']

    for root, dirs, files in os.walk(startpath):
        # Modify dirs in-place to prevent os.walk from entering excluded directories
        dirs[:] = [d for d in dirs if d not in exclude_dirs]

        level = root.replace(startpath, '').count(os.sep)
        indent = ' ' * 4 * (level)
        print(f'{indent}{os.path.basename(root)}/')

        subindent = ' ' * 4 * (level + 1)
        for f in files:
            print(f'{subindent}{f}')

if __name__ == "__main__":
    # Example usage: Prints the directory structure of the current directory
    # excluding 'node_modules' folders.
    print_directory_structure('.')
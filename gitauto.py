import subprocess
import sys
msg = "message"
subprocess.run(["git", "add", "."])
subprocess.run(["git", "commit", "-m", msg])
subprocess.run(["git", "branch", "-M", "main"])

# Define the command to be executed
command = "git push -u origin main"

# Run the command and capture its output
process = subprocess.Popen(command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# Pass input to the command
input_data = b"anujup/n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/n"
stdout, stderr = process.communicate(input=input_data)

# Wait for the command to finish and get the output
stdout, stderr = process.communicate()

# Print the output
print(stdout.decode())

# Print any errors
print(stderr.decode())


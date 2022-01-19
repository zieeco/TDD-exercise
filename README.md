# TDD-exercise

These are a series of JavaScript exercises from  the Microverse curriculum intended for helping student get comfortable with Unit testing in JavaScript.

## Getting Started On How To Use These Exercises

Before you start you should have a few things installed on your machine:
1. **NPM**. To check if you have NPM installed, type `npm --version` in your terminal. If you get back `Command 'npm' not found, but can be installed with:`, do NOT follow the instructions in the terminal to install with `apt-get`. (This causes permission issues.) Instead, install Node with NVM by following the instructions below:

* [ ] Overview on installing  node:

- Node is a JavaScript runtime environment that allows you to run JavaScript outside of your web browser, which means that it gives you the ability to code the Server side of your application in JavaScript. To get started, there are some required tools we need before we can install Node on your system. We're going to install it using the `nvm` (Node version Manager) because it makes it easy to change the Node versions and upgrade Node.
There's another tool called the `npm` (Node Package Manager) that you will use later to help you install the various libraries and tools used in JavaScript environment.

- ### Installing nvm
<details>
    <summary><b>Installation on Linux</b></summary>

### Step 0: Prerequisites

To properly install `nvm`, you'll need `curl`. Simply run the command below:

~~~bash
sudo apt install curl
~~~

### Step 1: Downloading and Installing `nvm`

Simply run this command:

~~~bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
~~~

### Step 2: Initializing `nvm`

In the terminal there should be some directions on how to initialize `nvm`, if not, (or if you don't feel like copying from the terminal), run these commands:

~~~bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
~~~

You can verify `nvm` is installed by running the command:

~~~BASH
command -v nvm
~~~

if this returns `nvm: command not found` close the terminal and re-open it.
</details>

### Installing Node

  Now that you have `nvm` installed, you can further install Node.

#### Step 1: Installation

Run:

~~~bash
nvm install --lts
~~~

This command will install the latest stable version of node. Be patient and don't halt the process.

##### Step 2: Setting the Node Version

After installing Node, you need to tell `nvm` which version of Node to use when you run the `node` command. Just run the following command:

~~~bash
nvm use node
~~~

To check if all went well, you can run `node -v`, you should see the version of node and when you run `npm -v` you also see the version of the node you have.
if you see that, then you've successfully installed `Node`

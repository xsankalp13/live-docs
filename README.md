# Collaborative Document Editor

This project is a collaborative document editor, allowing multiple users to create, share, and edit documents in real-time. The editor leverages cutting-edge technologies like Next.js, Tailwind CSS, and Lexical for a smooth and responsive user experience. It also incorporates Liveblocks for real-time collaboration and room management.

## Features

- **Real-time Collaboration:** Multiple users can edit a document simultaneously.
- **User Roles:** Users can be assigned roles such as `creator`, `editor`, or `viewer`, which determine their level of access to the document.
- **Document Sharing:** Easily share documents with others by adding them as collaborators.
- **Customizable UI:** A flexible and customizable user interface with a floating toolbar and a responsive design.
- **Random User Color Assignment:** Users are assigned random colors for differentiation in the collaborative space.
- **Room Management:** Rooms are managed with specific permissions for different roles.
- **Document Deletion:** Securely delete documents with confirmation dialogs to prevent accidental deletions.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Editor:** [Lexical](https://lexical.dev/)
- **Collaboration:** [Liveblocks](https://liveblocks.io/)
- **Icons & Images:** [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development environment:

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/collaborative-document-editor.git
    cd collaborative-document-editor
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Set up environment variables:

    Create a `.env.local` file in the root of your project and add your Liveblocks API key:

    ```env
    NEXT_PUBLIC_LIVEBLOCKS_SECRET=<your-liveblocks-api-key>
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **`components/`**: Contains reusable React components like `FloatingToolbar`, `DeleteModal`, and UI components.
- **`lib/`**: Utility functions and helpers used across the project.
- **`types/`**: TypeScript type definitions for various props and data structures used in the project.
- **`pages/`**: Next.js pages, including API routes for handling room actions.

## Key Files

- **`components/editor/plugins/FloatingToolbar.tsx`**: Implements a floating toolbar that appears when text is selected in the editor.
- **`components/DeleteModal.tsx`**: A modal component that confirms the deletion of a document.
- **`lib/utils.ts`**: Utility functions for common tasks such as stringifying JSON, date conversion, and generating random colors.
- **`types/index.d.ts`**: TypeScript type definitions for users, room metadata, and more.
- **`app/api/auth/[...nextauth]/options.ts`**: Handles authentication options with NextAuth.js.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/my-new-feature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Lexical](https://lexical.dev/) - For the powerful text editor
- [Liveblocks](https://liveblocks.io/) - For real-time collaboration capabilities
- [Next.js](https://nextjs.org/) - For the robust React framework
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first CSS styling

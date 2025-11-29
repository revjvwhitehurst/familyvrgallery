# Family VR Gallery

A full-stack WebXR family photo gallery.

## Setup

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd familyvrgallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start server:
   ```bash
   npm start
   ```

4. Open browser:
   ```
   http://localhost:3000/public/index.html
   ```

5. Upload images via UI. Click thumbnails to highlight in VR room.

## Notes
- `/server/uploads` stores uploaded images.
- All Three.js modules are local; run `npm install` first.
- Add authentication and file size/type validation for public deployment.

## Future Enhancements
- Move to Next.js + React Three Fiber
- Drag-to-place photos in 3D
- Persist frame positions in a database
- Add audio notes per photo

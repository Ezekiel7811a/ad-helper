import { promises } from "fs";
import path from "path";

export async function GET() {
    const dirPath = path.join(process.cwd(), "app/components/nodes");
    const filesList: string[] = [];
    const searchFiles = async (dirPath: string) => {
        const files = await promises.readdir(dirPath);
        for (const file of files) {
            // Using `for...of` to handle async/await properly
            const filePath = path.join(dirPath, file);
            const stat = await promises.stat(filePath);
            if (stat.isDirectory()) {
                await searchFiles(filePath);
            } else if (filePath.endsWith(".tsx")) {
                const corrFilePath = filePath
                    .replace(/\\/g, "/")
                    .split("nodes/")[1];
                filesList.push(corrFilePath);
            }
        }
    };

    try {
        await searchFiles(dirPath);
        console.log(filesList);
    } catch (error) {
        const message =
            error instanceof Error ? error.message : "Unknown error";
        return Response.json(message, { status: 500 });
    }

    return Response.json(filesList, { status: 200 });
}

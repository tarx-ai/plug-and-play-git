import { useState } from "react";
import Field from "@/components/Field";

type AddWorkspaceProps = {
    onCancel: () => void;
};

const AddWorkspace = ({ onCancel }: AddWorkspaceProps) => {
    const [title, setTitle] = useState<string>("");
    const [color, setColor] = useState<string>("#92B6DE");

    const colors = [
        "#92B6DE", "#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle workspace creation logic here
        console.log("Creating workspace:", { title, color });
        onCancel();
    };

    return (
        <div className="p-8">
            <div className="mb-8">
                <div className="h4 mb-2">Create new workspace</div>
                <div className="body2 text-n-4">
                    Organize your projects and coding sessions
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <Field
                    className="mb-6"
                    label="Workspace name"
                    placeholder="Enter workspace name"
                    value={title}
                    onChange={(e: any) => setTitle(e.target.value)}
                    required
                />
                <div className="mb-8">
                    <div className="base2 font-semibold mb-4">Choose color</div>
                    <div className="flex flex-wrap gap-3">
                        {colors.map((colorOption) => (
                            <button
                                key={colorOption}
                                type="button"
                                className={`w-8 h-8 rounded-lg border-2 transition-all ${
                                    color === colorOption
                                        ? "border-n-1 scale-110"
                                        : "border-n-4 hover:border-n-3"
                                }`}
                                style={{ backgroundColor: colorOption }}
                                onClick={() => setColor(colorOption)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex gap-3">
                    <button
                        className="flex-1 px-4 py-2 bg-n-6 text-n-1 rounded-lg hover:bg-n-5 transition-colors"
                        type="button"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="flex-1 px-4 py-2 bg-primary-1 text-n-1 rounded-lg hover:bg-primary-1/90 transition-colors disabled:opacity-50"
                        type="submit"
                        disabled={!title.trim()}
                    >
                        Create workspace
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddWorkspace;

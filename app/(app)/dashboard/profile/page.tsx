"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "@clerk/nextjs";
import GuideBarButton from "@/components/layout/GuideBarButton";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PrimaryBtn from "@/components/landing/Button";
import { MdSaveAs } from "react-icons/md";

export default function ProfilePage() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [url, setUrl] = useState("");
    const { isLoaded, isSignedIn, user } = useUser();
    const [provider, setProvider] = useState<"github" | "gitlab" | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isPrjOpen, setIsPrjOpen] = useState(false);
    const [isExpOpen, setIsExpOpen] = useState(false);
    const [isEudOpen, setIsEudOpen] = useState(false);
    const [isTSOpen, setIsTSOpen] = useState(false);
    const [isCLOpen, setIsCLOpen] = useState(false);
    const [projects, setProjects] = useState<any[]>([]);
    const [projectId, setProjectId] = useState<number | null>(null);
    const [education, setEducation] = useState<any[]>([]);
    const [educationId, setEducationId] = useState<number | null>(null);
    const [experiences, setExperiences] = useState<any[]>([]);
    const [experienceId, setExperienceId] = useState<number | null>(null);
    const [techSkills, setTechSkills] = useState<any[]>([]);
    const [techSkillId, setTechSkillId] = useState<number | null>(null);
    const [contactLinks, setContactLinks] = useState({
        email: "",
        github: "",
        linkedin: "",
        website: "",
    });
    const [gitAvatar, setGitAvatar] = useState<string>("");
    const [gitBio, setGitBio] = useState<string>("");
    const [portAvatar, setPortAvatar] = useState<string>("");
    const [portBio, setPortBio] = useState<string>("");
    const [usernameChecking, setUsernameChecking] = useState(false);
    const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [portUsername, setPortUsername] = useState("");
    const [gitUsername, setGitUsername] = useState("");

    useEffect(() => {
        if (!usernameTouched) {
            return;
        }

        const trimmedUsername = username.trim().toLowerCase();

        if (!trimmedUsername) {
            setUsernameAvailable(null);
            setUsernameChecking(false);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                setUsernameChecking(true);

                const response = await fetch(
                    `/api/username/check?username=${encodeURIComponent(
                        trimmedUsername
                    )}`
                );

                const data = await response.json();

                if (!response.ok) {
                    setUsernameAvailable(null);
                    return;
                }

                setUsernameAvailable(data.available);
            } catch (error) {
                console.error(
                    "Username availability check failed:",
                    error
                );

                setUsernameAvailable(null);
            } finally {
                setUsernameChecking(false);
            }
        }, 500);

        return () => clearTimeout(timeout);
    }, [username, usernameTouched]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(`${window.location.origin}/portfolio/${username}`);
        }
    }, [username]);

    const fetchProviderInfo = async (): Promise<
        "github" | "gitlab" | null
    > => {
        if (!isSignedIn) {
            return null;
        }

        try {
            const response = await fetch("/api/provider");
            const data = await response.json();

            if (!response.ok) {
                console.error(
                    data.error || "Failed to fetch provider"
                );
                return null;
            }

            setProvider(data.provider);

            return data.provider;
        } catch (error) {
            console.error("Provider fetch failed:", error);
            return null;
        }
    };

    const fetchProviderData = async (currentProvider: "github" | "gitlab") => {
        if (!isSignedIn) {
            return;
        }

        try {
            const endpoint =
                currentProvider === "github"
                    ? "/api/github"
                    : "/api/gitlab";

            const response = await fetch(endpoint);
            const data = await response.json();

            if (!response.ok) {
                console.error(
                    data.error || `Failed to fetch ${currentProvider} data`
                );
                return;
            }

            if (data.projects) {
                setProjects(data.projects);
            }

            if (data.user) {
                setName(data.user.name || "");
                setGitUsername(data.user.username || ""),
                    setGitBio(data.user.bio || "");
                setGitAvatar(data.user.avatar || "");
            }
        } catch (error) {
            console.error(
                `${currentProvider} fetch failed:`,
                error
            );
        }
    };

    const fetchPortfolio = async () => {
        try {
            const response = await fetch("/api/portfolio");
            const data = await response.json();
            const portfolio = data.portfolio

            if (!portfolio) {
                return;
            }

            if (portfolio.avatar) {
                setPortAvatar(portfolio.avatar);
            };

            if (portfolio.bio) {
                setPortBio(portfolio.bio);
            };

            if (portfolio.education) {
                setEducation(portfolio.education);
            };

            if (portfolio.experiences) {
                setExperiences(portfolio.experiences);
            };

            if (portfolio.techSkills) {
                setTechSkills(portfolio.techSkills);
            };

            if (portfolio.contactLinks) {
                setContactLinks(portfolio.contactLinks);
            };

            if (portfolio.username) {
                setPortUsername(portfolio.username);
            };
        } catch (err) {
            console.error("GitHub fetch failed", err);
        }
    };

    useEffect(() => {
        if (portAvatar) {
            setAvatar(portAvatar);
        } else if (gitAvatar) {
            setAvatar(gitAvatar);
        }
    }, [portAvatar, gitAvatar]);

    useEffect(() => {
        if (portBio) {
            setBio(portBio);
        } else if (gitBio) {
            setBio(gitBio);
        }
    }, [portBio, gitBio]);

    useEffect(() => {
        if (portUsername) {
            setUsername(portUsername);
        } else if (gitUsername) {
            setUsername(gitUsername);
        }
    }, [portUsername, gitUsername]);

    useEffect(() => {
        if (!isLoaded) return;

        if (!isSignedIn) {
            setLoading(false);
            return;
        }

        const init = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const currentProvider = await fetchProviderInfo();

            if (currentProvider) {
                await fetchProviderData(currentProvider);
            }

            await fetchPortfolio();
            setLoading(false);
        };

        init();
    }, [isLoaded, isSignedIn]);

    // avatar
    const handleAvatarUpload = async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "gitportify_unsigned");

        const res = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            { method: "POST", body: formData }
        );

        const data = await res.json();
        setAvatar(data.secure_url);
    };

    const handleRemoveProject = (id: number) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };

    const handleUpdateProject = (id: number, field: string, value: string) => {
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, [field]: value } : p));
    };

    const handleAddTech = (id: number, tech: string) => {
        if (!tech.trim()) return;
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, tech: [...p.tech, tech] } : p));
    };

    const handleRemoveTech = (id: number, tech: string) => {
        setProjects((prev) => prev.map((p) => p.id === id ? { ...p, tech: p.tech.filter((t: any) => t !== tech) } : p));
    };

    // Experience
    const handleAddExperience = () => {
        setExperiences((prev) => [
            ...prev,
            { id: Date.now(), role: "", company: "", location: "", startDate: "", endDate: "", current: false, description: "", tech: [] },
        ]);
    };

    const handleRemoveExperience = (id: number) => {
        setExperiences((prev) => prev.filter((e) => e.id !== id));
    };

    const handleUpdateExperience = (id: number, field: string, value: string) => {
        setExperiences((prev) =>
            prev.map((e) =>
                e.id === id
                    ? { ...e, [field]: field === "current" ? value === "true" : value }
                    : e
            )
        );
    };

    const handleAddExpTech = (id: number, tech: string) => {
        if (!tech.trim()) return;
        setExperiences((prev) => prev.map((e) => e.id === id ? { ...e, tech: [...e.tech, tech] } : e));
    };

    const handleRemoveExpTech = (id: number, tech: string) => {
        setExperiences((prev) => prev.map((e) => e.id === id ? { ...e, tech: e.tech.filter((t: any) => t !== tech) } : e));
    };

    // Education 
    const handleAddEducation = () => {
        setEducation((prev) => [
            ...prev,
            { id: Date.now(), degree: "", institution: "", location: "", startYear: "", endYear: "", description: "" },
        ]);
    };

    const handleRemoveEducation = (id: number) => {
        setEducation((prev) => prev.filter((e) => e.id !== id));
    };

    const handleUpdateEducation = (id: number, field: string, value: string) => {
        setEducation((prev) => prev.map((e) => e.id === id ? { ...e, [field]: value } : e));
    };

    // Tech Skills
    const handleAddTechSkillGroup = () => {
        setTechSkills((prev) => [
            ...prev,
            { id: Date.now(), category: "", skills: [] },
        ]);
    };

    const handleRemoveTechSkillGroup = (id: number) => {
        setTechSkills((prev) => prev.filter((g) => g.id !== id));
    };

    const handleUpdateTechSkillGroup = (id: number, field: string, value: string) => {
        setTechSkills((prev) => prev.map((g) => g.id === id ? { ...g, [field]: value } : g));
    };

    const handleAddSkill = (id: number, skill: string) => {
        if (!skill.trim()) return;
        setTechSkills((prev) => prev.map((g) => g.id === id ? { ...g, skills: [...g.skills, skill] } : g));
    };

    const handleRemoveSkill = (id: number, skill: string) => {
        setTechSkills((prev) => prev.map((g) => g.id === id ? { ...g, skills: g.skills.filter((s: any) => s !== skill) } : g));
    };

    // Contact 
    const handleUpdateContact = (field: string, value: string) => {
        setContactLinks((prev) => ({ ...prev, [field]: value }));
    }

    // save
    const handleSave = async () => {
        const isContactLinksValid = Object.values(contactLinks).every(
            (value) => value.trim() !== ""
        );

        if (!avatar || !name || !bio || !username.trim() || projects.length === 0 || techSkills.length === 0 || !isContactLinksValid) {
            toast.error("Please complete all required fields before saving.");
            return;
        };

        try {
            setLoading(true)

            const res = await fetch("/api/portfolio", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    name,
                    bio,
                    avatar,
                    projects,
                    education,
                    experiences,
                    techSkills,
                    contactLinks,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                toast.error(data.error || "Publish failed");
                return;
            }

            toast.success("Data is Saved");
        } catch (err) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false)
        }

    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnHover={false}
                draggable
                theme="colored"
            />

            <div className="fixed bottom-5 right-6 z-40">
                <GuideBarButton />
            </div>

            <main className="min-h-full w-full px-4 py-5 md:px-6 xl:px-8">
                <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 pb-10 pt-12 md:pt-0 md:pb-0">

                    {/* Header */}
                    <div className="mb-2">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground fira-sans-semibold sm:text-3xl">
                            Profile
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground fira-sans-regular">
                            Manage your profile information, projects, experience,
                            skills, education, and contact details.
                        </p>
                    </div>

                    {/* Basic Information */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setIsPrjOpen(false);
                                setIsExpOpen(false);
                                setIsEudOpen(false);
                                setIsTSOpen(false);
                                setIsCLOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-foreground/3 sm:px-6"
                        >
                            <div>
                                <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                    Basic Information
                                </h2>
                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                    Your profile image, name, username and bio.
                                </p>
                            </div>

                            <span className="shrink-0 text-lg text-muted-foreground">
                                {isOpen ? "+" : "−"}
                            </span>
                        </div>

                        {!isOpen && (
                            <div className="border-t border-foreground/10 px-5 py-6 sm:px-6">
                                <div className="space-y-6">

                                    {/* Profile Image */}
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                        <img
                                            src={
                                                user?.imageUrl ||
                                                "/default-avatar.png"
                                            }
                                            alt={user?.fullName || "Profile"}
                                            className="h-20 w-20 shrink-0 rounded-2xl border border-foreground/10 object-cover"
                                        />

                                        <div className="space-y-2">
                                            <div>
                                                <Label className="text-sm fira-sans-medium">
                                                    Profile Image
                                                </Label>
                                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                                    Upload an image to use on your
                                                    portfolio.
                                                </p>
                                            </div>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files?.[0];

                                                    if (file) {
                                                        handleAvatarUpload(file);
                                                    }
                                                }}
                                                className="block w-full max-w-xs cursor-pointer rounded-lg border border-foreground/10 bg-background px-2 py-1.5 text-xs text-muted-foreground file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-foreground/10 file:px-2.5 file:py-1 file:text-xs file:text-foreground hover:border-foreground/20"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-5">

                                        {/* Name */}
                                        <div className="space-y-2">
                                            <Label className="text-sm fira-sans-medium">
                                                Name
                                            </Label>

                                            <input
                                                value={name}
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                                placeholder="Your name"
                                                className="h-10 w-full rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 fira-sans-regular"
                                            />
                                        </div>

                                        {/* Username */}
                                        <div className="space-y-2">
                                            <Label className="text-sm fira-sans-medium">
                                                Username
                                            </Label>

                                            <div className="relative">
                                                <div className="flex items-center rounded-lg border border-foreground/10 bg-background transition-colors focus-within:border-purple-500/50 focus-within:ring-2 focus-within:ring-purple-500/10">
                                                    <input
                                                        value={username}
                                                        onChange={(e) => {
                                                            setUsername(
                                                                e.target.value
                                                            );
                                                            setUsernameAvailable(
                                                                null
                                                            );
                                                            setUsernameTouched(
                                                                true
                                                            );
                                                        }}
                                                        placeholder="your-name"
                                                        className="h-10 min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-muted-foreground/60 fira-sans-regular"
                                                    />
                                                </div>
                                            </div>

                                            {usernameChecking && (
                                                <p className="text-xs text-muted-foreground fira-sans-regular">
                                                    Checking username...
                                                </p>
                                            )}

                                            {usernameAvailable === true && (
                                                <p className="text-xs text-green-500 fira-sans-medium">
                                                    ✓ Username is available
                                                </p>
                                            )}

                                            {usernameAvailable === false && (
                                                <p className="text-xs text-red-500 fira-sans-medium">
                                                    ✕ Username is already taken
                                                </p>
                                            )}

                                            <p className="text-xs text-muted-foreground fira-sans-regular">
                                                Your portfolio will be available at{" "}
                                                <span className="text-foreground/70">
                                                    /p/{username || "username"}
                                                </span>
                                            </p>
                                        </div>

                                        {/* Bio */}
                                        <div className="space-y-2">
                                            <Label className="text-sm fira-sans-medium">
                                                Bio
                                            </Label>

                                            <Textarea
                                                value={bio}
                                                onChange={(e) =>
                                                    setBio(e.target.value)
                                                }
                                                placeholder="Write a short introduction about yourself..."
                                                rows={6}
                                                className="w-full resize-none rounded-lg border border-foreground/10 bg-background text-sm outline-none transition-colors focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 fira-sans-regular"
                                            />

                                            <p className="text-xs text-muted-foreground fira-sans-regular">
                                                Keep it short and relevant to your
                                                developer profile.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Projects */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div
                            onClick={() => {
                                setIsOpen(true);
                                setIsPrjOpen(!isPrjOpen);
                                setIsExpOpen(false);
                                setIsEudOpen(false);
                                setIsTSOpen(false);
                                setIsCLOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-foreground/3 sm:px-6"
                        >
                            <div>
                                <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                    Projects
                                </h2>
                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                    Showcase your GitHub or GitLab projects.
                                </p>
                            </div>

                            <span className="shrink-0 text-lg text-muted-foreground">
                                {isPrjOpen ? "−" : "+"}
                            </span>
                        </div>

                        {isPrjOpen && (
                            <div className="border-t border-foreground/10 px-5 py-6 sm:px-6">
                                <div className="space-y-3">
                                    {projects.length === 0 ? (
                                    <div className="rounded-xl border border-dashed border-foreground/10 bg-foreground/2.5 px-5 py-8 text-center">
                                        <p className="text-sm text-muted-foreground fira-sans-regular">
                                            There are no projects in your{" "}
                                            {provider === "github" ? "GitHub" : "GitLab"} account.
                                        </p>
                                    </div>
                                ) : (
                                    projects.map((project) => {
                                        const isProjectOpen =
                                            projectId === project.id;

                                        return (
                                            <div
                                                key={project.id}
                                                className="overflow-hidden rounded-xl border border-foreground/10 bg-background"
                                            >
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setProjectId(
                                                            isProjectOpen
                                                                ? null
                                                                : project.id
                                                        )
                                                    }
                                                    className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-foreground/3 fira-sans-medium"
                                                >
                                                    <span className="truncate">
                                                        {project.name ||
                                                            "Untitled Project"}
                                                    </span>

                                                    <span className="shrink-0 text-muted-foreground">
                                                        {isProjectOpen ? "−" : "+"}
                                                    </span>
                                                </button>

                                                {isProjectOpen && (
                                                    <div className="space-y-3 border-t border-foreground/10 p-4">
                                                        <input
                                                            value={project.name}
                                                            onChange={(e) =>
                                                                handleUpdateProject(
                                                                    project.id,
                                                                    "name",
                                                                    e.target.value
                                                                )
                                                            }
                                                            placeholder="Project name"
                                                            className="profile-input"
                                                        />

                                                        <input
                                                            value={
                                                                project.description
                                                            }
                                                            onChange={(e) =>
                                                                handleUpdateProject(
                                                                    project.id,
                                                                    "description",
                                                                    e.target.value
                                                                )
                                                            }
                                                            placeholder="Description"
                                                            className="profile-input"
                                                        />

                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={async (e) => {
                                                                const file =
                                                                    e.target
                                                                        .files?.[0];

                                                                if (!file) return;

                                                                const formData =
                                                                    new FormData();

                                                                formData.append(
                                                                    "file",
                                                                    file
                                                                );

                                                                formData.append(
                                                                    "upload_preset",
                                                                    "gitportify_unsigned"
                                                                );

                                                                const res =
                                                                    await fetch(
                                                                        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                                                                        {
                                                                            method: "POST",
                                                                            body: formData,
                                                                        }
                                                                    );

                                                                const data =
                                                                    await res.json();

                                                                handleUpdateProject(
                                                                    project.id,
                                                                    "imageUrl",
                                                                    data.secure_url
                                                                );
                                                            }}
                                                            className="block w-full cursor-pointer rounded-lg border border-foreground/10 bg-background px-2 py-1.5 text-xs text-muted-foreground file:mr-3 file:rounded-md file:border-0 file:bg-foreground/10 file:px-2 file:py-1"
                                                        />

                                                        <input
                                                            value={project.liveUrl}
                                                            onChange={(e) =>
                                                                handleUpdateProject(
                                                                    project.id,
                                                                    "githubUrl",
                                                                    e.target.value
                                                                )
                                                            }
                                                            placeholder="GitHub URL"
                                                            className="profile-input"
                                                        />

                                                        <div className="space-y-2">
                                                            <input
                                                                placeholder="Add tech and press Enter"
                                                                className="profile-input"
                                                                onKeyDown={(e) => {
                                                                    if (
                                                                        e.key ===
                                                                        "Enter"
                                                                    ) {
                                                                        e.preventDefault();

                                                                        handleAddTech(
                                                                            project.id,
                                                                            e
                                                                                .currentTarget
                                                                                .value
                                                                        );

                                                                        e.currentTarget.value =
                                                                            "";
                                                                    }
                                                                }}
                                                            />

                                                            <div className="flex flex-wrap gap-1.5">
                                                                {project.tech.map(
                                                                    (
                                                                        tech: string
                                                                    ) => (
                                                                        <span
                                                                            key={
                                                                                tech
                                                                            }
                                                                            className="inline-flex items-center gap-1 rounded-md bg-foreground/5 px-2 py-1 text-xs text-muted-foreground"
                                                                        >
                                                                            {tech}

                                                                            <button
                                                                                type="button"
                                                                                onClick={() =>
                                                                                    handleRemoveTech(
                                                                                        project.id,
                                                                                        tech
                                                                                    )
                                                                                }
                                                                                className="cursor-pointer text-red-500 hover:text-red-400"
                                                                            >
                                                                                ×
                                                                            </button>
                                                                        </span>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>

                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                handleRemoveProject(
                                                                    project.id
                                                                )
                                                            }
                                                            className="pt-1 text-xs text-red-500 hover:text-red-400 fira-sans-medium"
                                                        >
                                                            Remove project
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })
                                )}
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Experience */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div
                            onClick={() => {
                                setIsOpen(true);
                                setIsPrjOpen(false);
                                setIsExpOpen(!isExpOpen);
                                setIsEudOpen(false);
                                setIsTSOpen(false);
                                setIsCLOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-foreground/3 sm:px-6"
                        >
                            <div>
                                <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                    Experience
                                </h2>
                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                    Add your professional experience and roles.
                                </p>
                            </div>

                            <span className="shrink-0 text-lg text-muted-foreground">
                                {isExpOpen ? "−" : "+"}
                            </span>
                        </div>

                        {isExpOpen && (
                            <div className="border-t border-foreground/10 px-5 py-6 sm:px-6">
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        onClick={handleAddExperience}
                                        className="h-10 w-full rounded-lg border-foreground/10 text-sm hover:bg-foreground/5 fira-sans-regular"
                                    >
                                        + Add Experience
                                    </Button>

                                    <div className="space-y-3">
                                        {experiences.map((exp, index) => {
                                            const isExperienceOpen =
                                                experienceId === exp.id;

                                            return (
                                                <div
                                                    key={`${exp.id}-${index}`}
                                                    className="overflow-hidden rounded-xl border border-foreground/10 bg-background"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setExperienceId(
                                                                isExperienceOpen
                                                                    ? null
                                                                    : exp.id
                                                            )
                                                        }
                                                        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-foreground/3 fira-sans-medium"
                                                    >
                                                        <span className="truncate">
                                                            {exp.role ||
                                                                "Untitled Role"}
                                                        </span>

                                                        <span className="shrink-0 text-muted-foreground">
                                                            {isExperienceOpen
                                                                ? "−"
                                                                : "+"}
                                                        </span>
                                                    </button>

                                                    {isExperienceOpen && (
                                                        <div className="space-y-3 border-t border-foreground/10 p-4">
                                                            <input
                                                                value={exp.role}
                                                                onChange={(e) =>
                                                                    handleUpdateExperience(
                                                                        exp.id,
                                                                        "role",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Role / Title"
                                                                className="profile-input"
                                                            />

                                                            <input
                                                                value={exp.company}
                                                                onChange={(e) =>
                                                                    handleUpdateExperience(
                                                                        exp.id,
                                                                        "company",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Company"
                                                                className="profile-input"
                                                            />

                                                            <input
                                                                value={exp.location}
                                                                onChange={(e) =>
                                                                    handleUpdateExperience(
                                                                        exp.id,
                                                                        "location",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Location"
                                                                className="profile-input"
                                                            />

                                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                                <input
                                                                    value={
                                                                        exp.startDate
                                                                    }
                                                                    onChange={(e) =>
                                                                        handleUpdateExperience(
                                                                            exp.id,
                                                                            "startDate",
                                                                            e.target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Start date"
                                                                    className="profile-input"
                                                                />

                                                                <input
                                                                    value={
                                                                        exp.endDate
                                                                    }
                                                                    onChange={(e) =>
                                                                        handleUpdateExperience(
                                                                            exp.id,
                                                                            "endDate",
                                                                            e.target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="End date"
                                                                    disabled={
                                                                        exp.current
                                                                    }
                                                                    className="profile-input disabled:cursor-not-allowed disabled:opacity-50"
                                                                />
                                                            </div>

                                                            <label className="flex cursor-pointer items-center gap-2 text-xs text-muted-foreground fira-sans-regular">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={
                                                                        exp.current
                                                                    }
                                                                    onChange={(e) =>
                                                                        handleUpdateExperience(
                                                                            exp.id,
                                                                            "current",
                                                                            String(
                                                                                e
                                                                                    .target
                                                                                    .checked
                                                                            )
                                                                        )
                                                                    }
                                                                    className="cursor-pointer accent-purple-500"
                                                                />
                                                                Currently working
                                                                here
                                                            </label>

                                                            <input
                                                                value={
                                                                    exp.description
                                                                }
                                                                onChange={(e) =>
                                                                    handleUpdateExperience(
                                                                        exp.id,
                                                                        "description",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Description (optional)"
                                                                className="profile-input"
                                                            />

                                                            <div className="space-y-2">
                                                                <input
                                                                    placeholder="Add tech and press Enter"
                                                                    className="profile-input"
                                                                    onKeyDown={(e) => {
                                                                        if (
                                                                            e.key ===
                                                                            "Enter"
                                                                        ) {
                                                                            e.preventDefault();

                                                                            handleAddExpTech(
                                                                                exp.id,
                                                                                e
                                                                                    .currentTarget
                                                                                    .value
                                                                            );

                                                                            e.currentTarget.value =
                                                                                "";
                                                                        }
                                                                    }}
                                                                />

                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {exp.tech.map(
                                                                        (
                                                                            tech: string
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    tech
                                                                                }
                                                                                className="inline-flex items-center gap-1 rounded-md bg-foreground/5 px-2 py-1 text-xs text-muted-foreground"
                                                                            >
                                                                                {
                                                                                    tech
                                                                                }

                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        handleRemoveExpTech(
                                                                                            exp.id,
                                                                                            tech
                                                                                        )
                                                                                    }
                                                                                    className="cursor-pointer text-red-500 hover:text-red-400"
                                                                                >
                                                                                    ×
                                                                                </button>
                                                                            </span>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleRemoveExperience(
                                                                        exp.id
                                                                    )
                                                                }
                                                                className="pt-1 text-xs text-red-500 hover:text-red-400 fira-sans-medium"
                                                            >
                                                                Remove experience
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Education */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div
                            onClick={() => {
                                setIsOpen(true);
                                setIsPrjOpen(false);
                                setIsExpOpen(false);
                                setIsEudOpen(!isEudOpen);
                                setIsTSOpen(false);
                                setIsCLOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-foreground/3 sm:px-6"
                        >
                            <div>
                                <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                    Education
                                </h2>
                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                    Add degrees, certificates and academic history.
                                </p>
                            </div>

                            <span className="shrink-0 text-lg text-muted-foreground">
                                {isEudOpen ? "−" : "+"}
                            </span>
                        </div>

                        {isEudOpen && (
                            <div className="border-t border-foreground/10 px-5 py-6 sm:px-6">
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        onClick={handleAddEducation}
                                        className="h-10 w-full rounded-lg border-foreground/10 text-sm hover:bg-foreground/5 fira-sans-regular"
                                    >
                                        + Add Education
                                    </Button>

                                    <div className="space-y-3">
                                        {education.map((edu, index) => {
                                            const isEducationOpen =
                                                educationId === edu.id;

                                            return (
                                                <div
                                                    key={`${edu.id}-${index}`}
                                                    className="overflow-hidden rounded-xl border border-foreground/10 bg-background"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setEducationId(
                                                                isEducationOpen
                                                                    ? null
                                                                    : edu.id
                                                            )
                                                        }
                                                        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-foreground/3 fira-sans-medium"
                                                    >
                                                        <span className="truncate">
                                                            {edu.degree ||
                                                                "Untitled Degree"}
                                                        </span>

                                                        <span className="shrink-0 text-muted-foreground">
                                                            {isEducationOpen
                                                                ? "−"
                                                                : "+"}
                                                        </span>
                                                    </button>

                                                    {isEducationOpen && (
                                                        <div className="space-y-3 border-t border-foreground/10 p-4">
                                                            <input
                                                                value={edu.degree}
                                                                onChange={(e) =>
                                                                    handleUpdateEducation(
                                                                        edu.id,
                                                                        "degree",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Degree / Certificate"
                                                                className="profile-input"
                                                            />

                                                            <input
                                                                value={
                                                                    edu.institution
                                                                }
                                                                onChange={(e) =>
                                                                    handleUpdateEducation(
                                                                        edu.id,
                                                                        "institution",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Institution"
                                                                className="profile-input"
                                                            />

                                                            <input
                                                                value={edu.location}
                                                                onChange={(e) =>
                                                                    handleUpdateEducation(
                                                                        edu.id,
                                                                        "location",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Location"
                                                                className="profile-input"
                                                            />

                                                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                                <input
                                                                    value={
                                                                        edu.startYear
                                                                    }
                                                                    onChange={(e) =>
                                                                        handleUpdateEducation(
                                                                            edu.id,
                                                                            "startYear",
                                                                            e.target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Start year"
                                                                    className="profile-input"
                                                                />

                                                                <input
                                                                    value={
                                                                        edu.endYear
                                                                    }
                                                                    onChange={(e) =>
                                                                        handleUpdateEducation(
                                                                            edu.id,
                                                                            "endYear",
                                                                            e.target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="End year"
                                                                    className="profile-input"
                                                                />
                                                            </div>

                                                            <input
                                                                value={
                                                                    edu.description
                                                                }
                                                                onChange={(e) =>
                                                                    handleUpdateEducation(
                                                                        edu.id,
                                                                        "description",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Description (optional)"
                                                                className="profile-input"
                                                            />

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleRemoveEducation(
                                                                        edu.id
                                                                    )
                                                                }
                                                                className="pt-1 text-xs text-red-500 hover:text-red-400 fira-sans-medium"
                                                            >
                                                                Remove education
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Tech Skills */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div
                            onClick={() => {
                                setIsOpen(true);
                                setIsPrjOpen(false);
                                setIsExpOpen(false);
                                setIsEudOpen(false);
                                setIsTSOpen(!isTSOpen);
                                setIsCLOpen(false);
                            }}
                            className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-foreground/3 sm:px-6"
                        >
                            <div>
                                <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                    Tech Skills
                                </h2>
                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                    Organize your technical skills by category.
                                </p>
                            </div>

                            <span className="shrink-0 text-lg text-muted-foreground">
                                {isTSOpen ? "−" : "+"}
                            </span>
                        </div>

                        {isTSOpen && (
                            <div className="border-t border-foreground/10 px-5 py-6 sm:px-6">
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        onClick={handleAddTechSkillGroup}
                                        className="h-10 w-full rounded-lg border-foreground/10 text-sm hover:bg-foreground/5 fira-sans-regular"
                                    >
                                        + Add Tech Skill Group
                                    </Button>

                                    <div className="space-y-3">
                                        {techSkills.map((group, index) => {
                                            const isSkillGroupOpen =
                                                techSkillId === group.id;

                                            return (
                                                <div
                                                    key={`${group.id}-${index}`}
                                                    className="overflow-hidden rounded-xl border border-foreground/10 bg-background"
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            setTechSkillId(
                                                                isSkillGroupOpen
                                                                    ? null
                                                                    : group.id
                                                            )
                                                        }
                                                        className="flex w-full cursor-pointer items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-foreground/3 fira-sans-medium"
                                                    >
                                                        <span className="truncate">
                                                            {group.category ||
                                                                "Untitled Category"}
                                                        </span>

                                                        <span className="shrink-0 text-muted-foreground">
                                                            {isSkillGroupOpen
                                                                ? "−"
                                                                : "+"}
                                                        </span>
                                                    </button>

                                                    {isSkillGroupOpen && (
                                                        <div className="space-y-3 border-t border-foreground/10 p-4">
                                                            <input
                                                                value={
                                                                    group.category
                                                                }
                                                                onChange={(e) =>
                                                                    handleUpdateTechSkillGroup(
                                                                        group.id,
                                                                        "category",
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                placeholder="Category (e.g. Frontend, Backend)"
                                                                className="profile-input"
                                                            />

                                                            <div className="space-y-2">
                                                                <input
                                                                    placeholder="Add skill and press Enter"
                                                                    className="profile-input"
                                                                    onKeyDown={(e) => {
                                                                        if (
                                                                            e.key ===
                                                                            "Enter"
                                                                        ) {
                                                                            e.preventDefault();

                                                                            handleAddSkill(
                                                                                group.id,
                                                                                e
                                                                                    .currentTarget
                                                                                    .value
                                                                            );

                                                                            e.currentTarget.value =
                                                                                "";
                                                                        }
                                                                    }}
                                                                />

                                                                <div className="flex flex-wrap gap-1.5">
                                                                    {group.skills.map(
                                                                        (
                                                                            skill: string
                                                                        ) => (
                                                                            <span
                                                                                key={
                                                                                    skill
                                                                                }
                                                                                className="inline-flex items-center gap-1 rounded-md bg-foreground/5 px-2 py-1 text-xs text-muted-foreground"
                                                                            >
                                                                                {
                                                                                    skill
                                                                                }

                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() =>
                                                                                        handleRemoveSkill(
                                                                                            group.id,
                                                                                            skill
                                                                                        )
                                                                                    }
                                                                                    className="cursor-pointer text-red-500 hover:text-red-400"
                                                                                >
                                                                                    ×
                                                                                </button>
                                                                            </span>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>

                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleRemoveTechSkillGroup(
                                                                        group.id
                                                                    )
                                                                }
                                                                className="pt-1 text-xs text-red-500 hover:text-red-400 fira-sans-medium"
                                                            >
                                                                Remove skill group
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Contact Links */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div
                            onClick={() => {
                                setIsOpen(true);
                                setIsPrjOpen(false);
                                setIsExpOpen(false);
                                setIsEudOpen(false);
                                setIsTSOpen(false);
                                setIsCLOpen(!isCLOpen);
                            }}
                            className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 hover:bg-foreground/3 sm:px-6"
                        >
                            <div>
                                <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                    Contact Links
                                </h2>
                                <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                    Add links people can use to contact or find you.
                                </p>
                            </div>

                            <span className="shrink-0 text-lg text-muted-foreground">
                                {isCLOpen ? "−" : "+"}
                            </span>
                        </div>

                        {isCLOpen && (
                            <div className="border-t border-foreground/10 px-5 py-6 sm:px-6">
                                <div className="grid gap-3">
                                    <input
                                        placeholder="Email"
                                        value={contactLinks.email}
                                        onChange={(e) =>
                                            handleUpdateContact(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        className="profile-input"
                                    />

                                    <input
                                        placeholder="GitHub URL"
                                        value={contactLinks.github}
                                        onChange={(e) =>
                                            handleUpdateContact(
                                                "github",
                                                e.target.value
                                            )
                                        }
                                        className="profile-input"
                                    />

                                    <input
                                        placeholder="LinkedIn URL"
                                        value={contactLinks.linkedin}
                                        onChange={(e) =>
                                            handleUpdateContact(
                                                "linkedin",
                                                e.target.value
                                            )
                                        }
                                        className="profile-input"
                                    />

                                    <input
                                        placeholder="Website URL"
                                        value={contactLinks.website}
                                        onChange={(e) =>
                                            handleUpdateContact(
                                                "website",
                                                e.target.value
                                            )
                                        }
                                        className="profile-input"
                                    />
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Save */}
                    <div className="sticky bottom-4 z-30 pt-2">
                        <div className="rounded-2xl border border-foreground/10 bg-background/80 p-2 shadow-xl backdrop-blur-xl">
                            <PrimaryBtn
                                onClick={handleSave}
                                reverse
                                icon={!loading && <MdSaveAs />}
                                text={loading ? "Saving..." : "Save Changes"}
                                className="w-full"
                                contentClassName="w-full text-sm sm:text-base"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
};
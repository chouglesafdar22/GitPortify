"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/dashboard/Footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
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
    const { data: session } = useSession();
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

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(`${window.location.origin}/portfolio/${username}`);
        }
    }, [username]);

    const fetchGithubInfo = async () => {
        if (!session?.accessToken) {
            console.log("no access Token");
            return;
        }

        try {
            const res = await fetch(`/api/github?token=${session.accessToken}`);
            const data = await res.json();

            if (data.projects) {
                setProjects(data.projects);
            };

            if (data.user) {
                setName(data.user.name || "");
                setGitBio(data.user.bio || "");
                setGitAvatar(data.user.avatar || "");
            };
        } catch (err) {
            console.error("GitHub fetch failed", err);
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
                setUsername(portfolio.username);
            };
        } catch (err) {
            console.error("GitHub fetch failed", err);
        }
    };

    useEffect(() => {
        if (!session) return;
        const init = async () => {
            await fetchGithubInfo();
            await fetchPortfolio();

            if (portAvatar) {
                setAvatar(portAvatar)
            } else {
                setAvatar(gitAvatar)
            };

            if (portBio) {
                setBio(portBio)
            } else {
                setBio(gitBio)
            };

            setLoading(false);
        };

        init();
    }, [session]);

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

    // Projects
    // const handleAddProject = () => {
    //     setProjects((prev) => [
    //         ...prev,
    //         { id: Date.now(), name: "New Project", description: "Project description...", imageUrl: "", tech: [], liveUrl: "" },
    //     ]);
    // };

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
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                pauseOnHover={false}
                draggable
                theme="colored"
            />

            <div className="fixed bottom-5 right-6 z-40">
                <GuideBarButton />
            </div>

            <div className="p-5 space-y-8 h-full flex flex-col max-w-md sm:max-w-xl lg:max-w-3xl w-full">
                <h1 className="text-lg md:text-xl xl:text-2xl md:px-16 md:text-left text-center fira-sans-semibold">
                    Profile
                </h1>
                <div className="border rounded-xl p-6 space-y-5">
                    <div onClick={() => {
                        setIsOpen(!isOpen)
                        setIsPrjOpen(false)
                        setIsExpOpen(false)
                        setIsEudOpen(false)
                        setIsTSOpen(false)
                        setIsCLOpen(false)
                    }}
                        className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                            Basic Information
                        </h3>
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium transition-all duration-150 ease-initial">{!isOpen ? "▾" : "▸"}</h3>
                    </div>
                    {!isOpen && (
                        <div
                            aria-expanded
                            className="space-y-0.5 transition-all duration-300 ease-in-out pt-6 border-t">
                            <div className="flex md:flex-row flex-col md:items-center gap-2.5 space-y-5">
                                {/* Avatar */}
                                <img
                                    src={session?.user?.image || "/default-avatar.png"}
                                    alt={session?.user?.name || ""}
                                    className="h-20 w-20 rounded-full object-cover border"
                                />
                                <div className="space-y-2">
                                    <Label className="fira-sans-medium">Profile Image</Label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleAvatarUpload(file);
                                        }}
                                        className="cursor-pointer text-gray-500 text-xs border p-1 rounded-md fira-sans-regular"
                                    />
                                </div>
                            </div>
                            <div className="grid gap-5 py-3.5">

                                <div className="space-y-3">
                                    <Label className="fira-sans-medium">Name</Label>
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your name"
                                        className="border rounded-md px-3 py-2 text-sm bg-background fira-sans-regular"
                                    />
                                </div>

                                {/* <div>
                            <p className="text-sm text-muted-foreground">
                                Portfolio URL
                            </p>
                            <div className="mt-1 rounded-md border px-3 py-2 text-sm break-all">
                                {username
                                    ? `${window.location.origin}/portfolio/${username}`
                                    : "Not available yet"}
                            </div>
                        </div> */}

                                <div className="space-y-3">
                                    <Label className="fira-sans-medium">Username (Portfolio URL)</Label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="your-name"
                                        className="border rounded-md px-3 py-2 text-sm bg-background fira-sans-regular"
                                    />
                                    <p className="text-[10px] text-muted-foreground fira-sans-light">
                                        Your portfolio will be available at /p/{username}
                                    </p>
                                </div>

                                {/* Bio */}
                                <div className="space-y-2">
                                    <Label className="fira-sans-medium">Bio</Label>
                                    <Textarea
                                        value={bio}
                                        onChange={(e) => setBio(e.target.value)}
                                        placeholder="Write a bio..."
                                        rows={10}
                                        className="max-h-25 w-full no-scrollbar fira-sans-regular"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border rounded-xl p-6 space-y-5">
                    <div onClick={() => {
                        setIsOpen(true)
                        setIsPrjOpen(!isPrjOpen)
                        setIsExpOpen(false)
                        setIsEudOpen(false)
                        setIsTSOpen(false)
                        setIsCLOpen(false)
                    }}
                        className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                            Projects
                        </h3>
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium transition-all duration-150 ease-initial">{isPrjOpen ? "▾" : "▸"}</h3>
                    </div>
                    {isPrjOpen && (
                        <div className="space-y-0.5 transition-all duration-300 ease-in-out">
                            <div className="space-y-3 pt-6 border-t">
                                <div className="space-y-2">
                                    {projects.map((project) => {
                                        const isOpen = projectId === project.id;
                                        return (
                                            <div key={project.id} className="border rounded-md">
                                                <button
                                                    onClick={() => setProjectId(isOpen ? null : project.id)}
                                                    className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular transition-all duration-150 ease-initial"
                                                >
                                                    <span>{project.name || "Untitled Project"}</span>
                                                    <span>{isOpen ? "▾" : "▸"}</span>
                                                </button>
                                                {isOpen && (
                                                    <div className="p-3 space-y-2 border-t">
                                                        <input
                                                            value={project.name}
                                                            onChange={(e) => handleUpdateProject(project.id, "name", e.target.value)}
                                                            placeholder="Project name"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                        <input
                                                            value={project.description}
                                                            onChange={(e) => handleUpdateProject(project.id, "description", e.target.value)}
                                                            placeholder="Description"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={async (e) => {
                                                                const file = e.target.files?.[0];
                                                                if (!file) return;
                                                                const formData = new FormData();
                                                                formData.append("file", file);
                                                                formData.append("upload_preset", "gitportify_unsigned");
                                                                const res = await fetch(
                                                                    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
                                                                    { method: "POST", body: formData }
                                                                );
                                                                const data = await res.json();
                                                                handleUpdateProject(project.id, "imageUrl", data.secure_url);
                                                            }}
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                        <input
                                                            value={project.liveUrl}
                                                            onChange={(e) => handleUpdateProject(project.id, "githubUrl", e.target.value)}
                                                            placeholder="GitHub URL"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                        <div className="space-y-2">
                                                            <input
                                                                placeholder="Add tech (press Enter)"
                                                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                                onKeyDown={(e) => {
                                                                    if (e.key === "Enter") {
                                                                        e.preventDefault();
                                                                        handleAddTech(project.id, e.currentTarget.value);
                                                                        e.currentTarget.value = "";
                                                                    }
                                                                }}
                                                            />
                                                            <div className="flex flex-wrap gap-1">
                                                                {project.tech.map((tech: string) => (
                                                                    <span
                                                                        key={tech}
                                                                        className="text-xs px-2 py-1 rounded-md bg-muted flex items-center gap-1 fira-sans-light"
                                                                    >
                                                                        {tech}
                                                                        <button
                                                                            onClick={() => handleRemoveTech(project.id, tech)}
                                                                            className="text-red-500 cursor-pointer fira-sans-light"
                                                                        >
                                                                            ×
                                                                        </button>
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <button
                                                            onClick={() => handleRemoveProject(project.id)}
                                                            className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                                        >
                                                            Remove
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
                </div>

                <div className="border rounded-xl p-6 space-y-5">
                    <div onClick={() => {
                        setIsOpen(true)
                        setIsPrjOpen(false)
                        setIsExpOpen(!isExpOpen)
                        setIsEudOpen(false)
                        setIsTSOpen(false)
                        setIsCLOpen(false)
                    }}
                        className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                            Experience
                        </h3>
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium transition-all duration-150 ease-initial">{isExpOpen ? "▾" : "▸"}</h3>
                    </div>
                    {isExpOpen && (
                        <div className="space-y-3 pt-6 border-t">
                            <Button
                                variant={"outline"}
                                onClick={handleAddExperience}
                                className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                            >
                                + Add Experience
                            </Button>
                            <div className="space-y-2">
                                {experiences.map((exp, index) => {
                                    const isOpen = experienceId === exp.id;
                                    return (
                                        <div key={`${exp.id}-${index}`} className="border rounded-md">
                                            <button
                                                onClick={() => setExperienceId(isOpen ? null : exp.id)}
                                                className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular transition-all duration-150 ease-initial"
                                            >
                                                <span>{exp.role || "Untitled Role"}</span>
                                                <span>{isOpen ? "▾" : "▸"}</span>
                                            </button>
                                            {isOpen && (
                                                <div className="p-3 space-y-2 border-t">
                                                    <input
                                                        value={exp.role}
                                                        onChange={(e) => handleUpdateExperience(exp.id, "role", e.target.value)}
                                                        placeholder="Role / Title"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <input
                                                        value={exp.company}
                                                        onChange={(e) => handleUpdateExperience(exp.id, "company", e.target.value)}
                                                        placeholder="Company"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <input
                                                        value={exp.location}
                                                        onChange={(e) => handleUpdateExperience(exp.id, "location", e.target.value)}
                                                        placeholder="Location"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <div className="flex gap-2">
                                                        <input
                                                            value={exp.startDate}
                                                            onChange={(e) => handleUpdateExperience(exp.id, "startDate", e.target.value)}
                                                            placeholder="Start date"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                        <input
                                                            value={exp.endDate}
                                                            onChange={(e) => handleUpdateExperience(exp.id, "endDate", e.target.value)}
                                                            placeholder="End date"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                            disabled={exp.current}
                                                        />
                                                    </div>
                                                    <label className="flex items-center gap-2 text-xs cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={exp.current}
                                                            onChange={(e) => handleUpdateExperience(exp.id, "current", String(e.target.checked))}
                                                            className="cursor-pointer"
                                                        />
                                                        Currently working here
                                                    </label>
                                                    <input
                                                        value={exp.description}
                                                        onChange={(e) => handleUpdateExperience(exp.id, "description", e.target.value)}
                                                        placeholder="Description (optional)"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <div className="space-y-2">
                                                        <input
                                                            placeholder="Add tech (press Enter)"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Enter") {
                                                                    e.preventDefault();
                                                                    handleAddExpTech(exp.id, e.currentTarget.value);
                                                                    e.currentTarget.value = "";
                                                                }
                                                            }}
                                                        />
                                                        <div className="flex flex-wrap gap-1">
                                                            {exp.tech.map((tech: string) => (
                                                                <span
                                                                    key={tech}
                                                                    className="text-xs px-2 py-1 rounded-md bg-muted flex items-center gap-1 fira-sans-light"
                                                                >
                                                                    {tech}
                                                                    <button
                                                                        onClick={() => handleRemoveExpTech(exp.id, tech)}
                                                                        className="text-red-500 cursor-pointer fira-sans-light"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemoveExperience(exp.id)}
                                                        className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <div className="border rounded-xl p-6 space-y-5">
                    <div onClick={() => {
                        setIsOpen(true)
                        setIsPrjOpen(false)
                        setIsExpOpen(false)
                        setIsEudOpen(!isEudOpen)
                        setIsTSOpen(false)
                        setIsCLOpen(false)
                    }}
                        className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                            Eudcation
                        </h3>
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium transition-all duration-150 ease-initial">{isEudOpen ? "▾" : "▸"}</h3>
                    </div>
                    {isEudOpen && (
                        <div className="space-y-3 pt-6 border-t">
                            <Button
                                variant={"outline"}
                                onClick={handleAddEducation}
                                className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                            >
                                + Add Education
                            </Button>
                            <div className="space-y-2">
                                {education.map((edu, index) => {
                                    const isOpen = educationId === edu.id;
                                    return (
                                        <div key={`${edu.id}-${index}`} className="border rounded-md">
                                            <button
                                                onClick={() => setEducationId(isOpen ? null : edu.id)}
                                                className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular transition-all duration-150 ease-initia"
                                            >
                                                <span>{edu.degree || "Untitled Degree"}</span>
                                                <span>{isOpen ? "▾" : "▸"}</span>
                                            </button>
                                            {isOpen && (
                                                <div className="p-3 space-y-2 border-t">
                                                    <input
                                                        value={edu.degree}
                                                        onChange={(e) => handleUpdateEducation(edu.id, "degree", e.target.value)}
                                                        placeholder="Degree / Certificate"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <input
                                                        value={edu.institution}
                                                        onChange={(e) => handleUpdateEducation(edu.id, "institution", e.target.value)}
                                                        placeholder="Institution"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <input
                                                        value={edu.location}
                                                        onChange={(e) => handleUpdateEducation(edu.id, "location", e.target.value)}
                                                        placeholder="Location"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <div className="flex gap-2">
                                                        <input
                                                            value={edu.startYear}
                                                            onChange={(e) => handleUpdateEducation(edu.id, "startYear", e.target.value)}
                                                            placeholder="Start year"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                        <input
                                                            value={edu.endYear}
                                                            onChange={(e) => handleUpdateEducation(edu.id, "endYear", e.target.value)}
                                                            placeholder="End year"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                        />
                                                    </div>
                                                    <input
                                                        value={edu.description}
                                                        onChange={(e) => handleUpdateEducation(edu.id, "description", e.target.value)}
                                                        placeholder="Description (optional)"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <button
                                                        onClick={() => handleRemoveEducation(edu.id)}
                                                        className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <div className="border rounded-xl p-6 space-y-5">
                    <div onClick={() => {
                        setIsOpen(true)
                        setIsPrjOpen(false)
                        setIsExpOpen(false)
                        setIsEudOpen(false)
                        setIsTSOpen(!isTSOpen)
                        setIsCLOpen(false)
                    }}
                        className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                            Tech Skills
                        </h3>
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium transition-all duration-150 ease-initial">{isTSOpen ? "▾" : "▸"}</h3>
                    </div>
                    {isTSOpen && (
                        <div className="space-y-3 pt-6 border-t">
                            <Button
                                variant={"outline"}
                                onClick={handleAddTechSkillGroup}
                                className="w-full text-sm border rounded-md py-2 hover:bg-muted cursor-pointer fira-sans-regular"
                            >
                                + Add Tech Skill Group
                            </Button>
                            <div className="space-y-2">
                                {techSkills.map((group, index) => {
                                    const isOpen = techSkillId === group.id;
                                    return (
                                        <div key={`${group.id}-${index}`} className="border rounded-md">
                                            <button
                                                onClick={() => setTechSkillId(isOpen ? null : group.id)}
                                                className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-sm hover:bg-muted fira-sans-regular transition-all duration-150 ease-initial"
                                            >
                                                <span>{group.category || "Untitled Category"}</span>
                                                <span>{isOpen ? "▾" : "▸"}</span>
                                            </button>
                                            {isOpen && (
                                                <div className="p-3 space-y-2 border-t">
                                                    <input
                                                        value={group.category}
                                                        onChange={(e) => handleUpdateTechSkillGroup(group.id, "category", e.target.value)}
                                                        placeholder="Category (e.g. Frontend, Backend)"
                                                        className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                    />
                                                    <div className="space-y-2">
                                                        <input
                                                            placeholder="Add skill (press Enter)"
                                                            className="w-full border rounded-md px-2 py-1 text-xs fira-sans-light"
                                                            onKeyDown={(e) => {
                                                                if (e.key === "Enter") {
                                                                    e.preventDefault();
                                                                    handleAddSkill(group.id, e.currentTarget.value);
                                                                    e.currentTarget.value = "";
                                                                }
                                                            }}
                                                        />
                                                        <div className="flex flex-wrap gap-1">
                                                            {group.skills.map((skill: string) => (
                                                                <span
                                                                    key={skill}
                                                                    className="text-xs px-2 py-1 rounded-md bg-muted flex items-center gap-1 fira-sans-light"
                                                                >
                                                                    {skill}
                                                                    <button
                                                                        onClick={() => handleRemoveSkill(group.id, skill)}
                                                                        className="text-red-500 cursor-pointer fira-sans-light"
                                                                    >
                                                                        ×
                                                                    </button>
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <button
                                                        onClick={() => handleRemoveTechSkillGroup(group.id)}
                                                        className="text-red-500 cursor-pointer text-xs fira-sans-light"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <div className="border rounded-xl p-6 space-y-5">
                    <div onClick={() => {
                        setIsOpen(true)
                        setIsPrjOpen(false)
                        setIsExpOpen(false)
                        setIsEudOpen(false)
                        setIsTSOpen(false)
                        setIsCLOpen(!isCLOpen)
                    }}
                        className="flex justify-between items-center cursor-pointer">
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                            Contact Links
                        </h3>
                        <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium transition-all duration-150 ease-initial">{isTSOpen ? "▾" : "▸"}</h3>
                    </div>
                    {isCLOpen && (
                        <div className="space-y-3 pt-6 border-t">
                            <input
                                placeholder="Email"
                                value={contactLinks.email}
                                onChange={(e) => handleUpdateContact("email", e.target.value)}
                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                            />
                            <input
                                placeholder="GitHub URL"
                                value={contactLinks.github}
                                onChange={(e) => handleUpdateContact("github", e.target.value)}
                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                            />
                            <input
                                placeholder="LinkedIn URL"
                                value={contactLinks.linkedin}
                                onChange={(e) => handleUpdateContact("linkedin", e.target.value)}
                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                            />
                            <input
                                placeholder="Website URL"
                                value={contactLinks.website}
                                onChange={(e) => handleUpdateContact("website", e.target.value)}
                                className="w-full border rounded-md px-2 py-1 text-xs fira-sans-regular"
                            />
                        </div>
                    )}
                </div>

                <PrimaryBtn
                    onClick={handleSave}
                    reverse
                    icon={!loading && <MdSaveAs />}
                    text={loading ? "Saving..." : "Save"}
                    className="w-full"
                    contentClassName="w-full xl:text-lg md:text-base text-sm"
                />
            </div>
            <Footer />
        </>
    )
};
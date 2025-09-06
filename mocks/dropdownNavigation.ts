export const recentChats = [
    {
        id: "chat-1",
        title: "Making John Better",
        subtitle: "Leadership development chat • 2m ago",
        url: "/chat/making-john-better",
        color: "bg-blue-500"
    },
    {
        id: "chat-2", 
        title: "Skills Assessment",
        subtitle: "Productivity audit • 1h ago",
        url: "/chat/skills-assessment",
        color: "bg-green-500"
    },
    {
        id: "chat-3",
        title: "Work-Life Balance",
        subtitle: "Time management • 3h ago", 
        url: "/chat/work-life-balance",
        color: "bg-purple-500"
    },
    {
        id: "chat-4",
        title: "Team Leadership",
        subtitle: "Management strategies • 1d ago",
        url: "/chat/team-leadership", 
        color: "bg-orange-500"
    },
    {
        id: "chat-5",
        title: "Goal Planning",
        subtitle: "Q4 objectives • 2d ago",
        url: "/chat/goal-planning",
        color: "bg-pink-500"
    }
];

export const workspaces = [
    {
        id: "workspace-1",
        title: "Personal Development",
        subtitle: "Leadership & productivity focus",
        url: "/workspace/personal-development",
        isRecommended: true,
        icon: "profile",
        color: "fill-blue-500"
    },
    {
        id: "workspace-2", 
        title: "Team Management",
        subtitle: "Collaborative workspace",
        url: "/workspace/team-management",
        isRecommended: true,
        icon: "profile-1",
        color: "fill-green-500"
    },
    {
        id: "workspace-3",
        title: "Skills Tracking",
        subtitle: "Professional growth",
        url: "/workspace/skills-tracking",
        icon: "dataflow",
        color: "fill-purple-500"
    },
    {
        id: "workspace-4",
        title: "Project Planning",
        subtitle: "Strategic initiatives",
        url: "/workspace/project-planning",
        icon: "calendar",
        color: "fill-orange-500"
    }
];

export const actions = [
    // TARX Pending Actions
    {
        id: "tarx-1",
        title: "Weekly Progress Report",
        subtitle: "Needs your approval • Goals tracking",
        onClick: () => console.log("TARX action 1"),
        icon: "copy",
        color: "fill-primary-1"
    },
    {
        id: "tarx-2",
        title: "Skills Assessment Results",
        subtitle: "Review recommendations • Leadership audit",
        onClick: () => console.log("TARX action 2"),
        icon: "dataflow",
        color: "fill-primary-1"
    },
    // User Pending Actions
    {
        id: "user-1",
        title: "Daily Habit Check-in",
        subtitle: "Mark today's progress • 3 habits pending",
        onClick: () => console.log("User action 1"),
        icon: "check",
        color: "fill-yellow-500"
    },
    {
        id: "user-2",
        title: "Goal Reflection",
        subtitle: "Weekly review due • Leadership development",
        onClick: () => console.log("User action 2"),
        icon: "marker",
        color: "fill-yellow-500"
    },
    {
        id: "user-3",
        title: "Team Feedback",
        subtitle: "Provide input on team dynamics",
        onClick: () => console.log("User action 3"),
        icon: "chat",
        color: "fill-yellow-500"
    }
];
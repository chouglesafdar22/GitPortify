"use client";
import { BarChart3, Lock } from "lucide-react";
import DashboardCard from "./dashboardCard";

export default function AnalyticsCard() {
    return (
        <DashboardCard title="Analytics">
            <div className="relative overflow-hidden rounded-xl border border-foreground/10">
                {/* Blurred preview */}
                <div className="pointer-events-none select-none blur-[3px]">
                    <div className="grid grid-cols-2 gap-3 p-4">
                        <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                            <p className="text-xs text-muted-foreground">
                                Views
                            </p>
                            <p className="mt-1 text-xl font-semibold text-foreground">
                                1,284
                            </p>
                        </div>

                        <div className="rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                            <p className="text-xs text-muted-foreground">
                                Visitors
                            </p>
                            <p className="mt-1 text-xl font-semibold text-foreground">
                                842
                            </p>
                        </div>
                    </div>

                    <div className="px-4 pb-4">
                        <div className="flex h-24 items-end gap-2 rounded-lg border border-foreground/10 bg-foreground/5 p-3">
                            {[35, 55, 42, 70, 48, 82, 62, 90, 68, 76, 58, 85].map(
                                (height, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 rounded-t-sm bg-purple-500/40"
                                        style={{
                                            height: `${height}%`,
                                        }}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* Coming Soon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[2px]">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10">
                            <Lock className="h-5 w-5 text-purple-400" />
                        </div>

                        <div className="flex items-center gap-2">
                            <BarChart3 className="h-4 w-4 text-purple-400" />

                            <span className="text-sm text-foreground fira-sans-medium">
                                Analytics
                            </span>
                        </div>

                        <p className="mt-1 text-xs text-muted-foreground fira-sans-regular">
                            Coming Soon
                        </p>
                    </div>
                </div>
            </div>
        </DashboardCard>
    );
}
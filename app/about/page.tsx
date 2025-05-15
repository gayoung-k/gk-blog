import { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Mail, Github } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About',
  description: 'Gayoung Kim - Software Developer',
};

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 space-y-4">
          <h1 className="text-4xl font-bold">Gayoung Kim</h1>
          <div className="text-muted-foreground flex flex-wrap gap-4">
            <Link
              href="mailto:gykim8798@gmail.com"
              className="hover:text-foreground flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>gykim8798@gmail.com</span>
            </Link>
            <Link
              href="https://github.com/gayoung-k"
              target="_blank"
              className="hover:text-foreground flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>gayoung-k</span>
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Technical Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'C#', 'Java'].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Blazor', '.NET'].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Back-end & Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['Express.js', 'NestJS', 'MySQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Other</h3>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Azure DevOps'].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Work Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Co-op Software Developer | Delta Elevator</h3>
              <p className="text-muted-foreground">May 2023 – Aug 2024</p>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>
                  Maintained a VB.NET-based ERP system, contributing fixes and performance
                  improvements.
                </li>
                <li>Refactored document loading logic, reducing load time by over 50%.</li>
                <li>Co-developed a Blazor WASM web app for digital safety compliance.</li>
                <li>
                  Contributed to a WPF training management app, working on UI (DevExpress), backend
                  (.NET).
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Projects */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Projects</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="hover:bg-muted/50 h-full transition-colors">
              <CardHeader>
                <CardTitle>One Plate</CardTitle>
                <p className="text-muted-foreground text-sm">Feb 2025 - Present</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'].map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Link href="https://github.com/Saravia95/Group11-Capstone" target="_blank">
              <Card className="hover:bg-muted/50 h-full transition-colors">
                <CardHeader>
                  <CardTitle>Digital Jukebox App</CardTitle>
                  <p className="text-muted-foreground text-sm">Dec 2024 - Apr 2025</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Supabase', 'WebSocket'].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="https://ieeexplore.ieee.org/document/8329915" target="_blank">
              <Card className="hover:bg-muted/50 h-full transition-colors">
                <CardHeader>
                  <CardTitle>Malicious UAV Detector</CardTitle>
                  <p className="text-muted-foreground text-sm">Jan 2017 – Feb 2017</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'CNN', 'Machine Learning'].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Education */}
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-bold">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">
                Advanced Diploma of Computer Programming and Analysis
              </h3>
              <p className="text-muted-foreground">Conestoga College | 2021 – 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Bachelor of Naval Architecture and Ocean Engineering <br />
                Interdisciplinary Major of Computer Science Engineering
              </h3>
              <p className="text-muted-foreground">Chungnam National University | 2015 – 2019</p>
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Certificates */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">Certificates</h2>
          <div className="space-y-2">
            <p>Cisco CCNA</p>
          </div>
        </section>
      </div>
    </div>
  );
}

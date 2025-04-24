import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  { icon: Github, href: 'https://github.com/gayoung-k' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/gayoung-k/' },
];
export function ProfileSection() {
  return (
    <>
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="bg-muted rounded-full p-2">
                <div className="h-36 w-36 overflow-hidden rounded-full">
                  <Image
                    src="/images/test.png"
                    alt="짐코딩"
                    width={144}
                    height={144}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-lg font-bold">Gayoung Kim</h3>
              <p className="text-primary text-sm">Full Stack Developer</p>
            </div>

            <div className="flex justify-center gap-2">
              {socialLinks.map((item, index) => (
                <Button key={index} variant="ghost" className="bg-primary/10" size="icon" asChild>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <item.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>

            {/* <p className="bg-primary/10 rounded p-2 text-center text-sm">
                  Full Stack Developer ✨
                </p> */}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

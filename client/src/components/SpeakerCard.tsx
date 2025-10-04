import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SpeakerCardProps {
  name: string;
  role: string;
  organization: string;
  bio: string;
  expertise: string[];
  image?: string;
}

export default function SpeakerCard({ 
  name, 
  role, 
  organization, 
  bio, 
  expertise, 
  image 
}: SpeakerCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className="hover-elevate">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="w-20 h-20 mb-4">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <h3 className="font-semibold text-lg text-foreground mb-1" data-testid={`speaker-name-${name}`}>
            {name}
          </h3>
          <p className="text-primary font-medium mb-1" data-testid={`speaker-role-${name}`}>
            {role}
          </p>
          <p className="text-muted-foreground text-sm mb-3" data-testid={`speaker-org-${name}`}>
            {organization}
          </p>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3" data-testid={`speaker-bio-${name}`}>
            {bio}
          </p>
          
          <div className="flex flex-wrap gap-1 justify-center">
            {expertise.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
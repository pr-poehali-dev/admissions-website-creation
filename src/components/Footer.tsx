import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">ИннТех</span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm opacity-80">© 2025 Институт Инновационных Технологий. Все права защищены.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

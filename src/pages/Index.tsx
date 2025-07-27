import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Trophy" className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Alpha Event</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Команда</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Организуем спортивные мероприятия любого масштаба
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональная организация спортивных соревнований, семейных праздников 
                и физкультурно-массовых мероприятий по всей России
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  <Icon name="Calendar" className="mr-2 h-5 w-5" />
                  Заказать мероприятие
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Icon name="Play" className="mr-2 h-5 w-5" />
                  Посмотреть портфолио
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                  <Icon name="Activity" className="h-32 w-32 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по организации спортивных мероприятий от идеи до реализации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Trophy",
                title: "Спортивные соревнования",
                description: "Организация турниров и чемпионатов по различным видам спорта"
              },
              {
                icon: "Users",
                title: "Семейные праздники",
                description: "Активные мероприятия для всей семьи с спортивными элементами"
              },
              {
                icon: "Target",
                title: "Массовые мероприятия",
                description: "Физкультурно-массовые события для больших групп участников"
              },
              {
                icon: "Medal",
                title: "Корпоративный спорт",
                description: "Спортивные тимбилдинги и корпоративные соревнования"
              },
              {
                icon: "Timer",
                title: "Детские соревнования",
                description: "Спортивные мероприятия и эстафеты для детей всех возрастов"
              },
              {
                icon: "Star",
                title: "Консультации",
                description: "Экспертная помощь в планировании и проведении мероприятий"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 500 успешно проведенных мероприятий за последние 5 лет
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Марафон Здоровья 2024",
                description: "Городской марафон с участием 2000+ человек",
                participants: "2000+ участников",
                location: "Москва"
              },
              {
                title: "Корпоративная Олимпиада",
                description: "Соревнования для крупной IT-компании",
                participants: "500 участников", 
                location: "Санкт-Петербург"
              },
              {
                title: "Детская Спартакиада",
                description: "Региональные соревнования для школьников",
                participants: "1200 участников",
                location: "Екатеринбург"
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Camera" className="h-16 w-16 text-primary/50" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Icon name="Users" className="mr-1 h-4 w-4" />
                      {project.participants}
                    </span>
                    <span className="flex items-center">
                      <Icon name="MapPin" className="mr-1 h-4 w-4" />
                      {project.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные профессионалы с многолетним стажем в сфере спортивных мероприятий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Александр Петров",
                role: "Директор проектов",
                experience: "15+ лет опыта"
              },
              {
                name: "Мария Сидорова", 
                role: "Координатор мероприятий",
                experience: "10+ лет опыта"
              },
              {
                name: "Дмитрий Козлов",
                role: "Технический директор",
                experience: "12+ лет опыта"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-lg text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">О компании Alpha Event</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы работаем в сфере организации спортивных мероприятий уже более 8 лет. 
                За это время наша команда провела сотни успешных проектов по всей России.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наша миссия — популяризация спорта и здорового образа жизни через качественные, 
                запоминающиеся мероприятия для людей всех возрастов.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">Мероприятий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                  <div className="text-muted-foreground">Участников</div>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <Icon name="Award" className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">+7 (495) 123-45-67</p>
                <p className="text-muted-foreground">Ежедневно 9:00-21:00</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">info@alpha-event.ru</p>
                <p className="text-muted-foreground">Ответим в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">г. Москва</p>
                <p className="text-muted-foreground">ул. Спортивная, 15</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
              <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Trophy" className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">Alpha Event</span>
              </div>
              <p className="text-background/80">
                Профессиональная организация спортивных мероприятий любого масштаба
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-background/80">
                <li>Спортивные соревнования</li>
                <li>Семейные праздники</li>
                <li>Массовые мероприятия</li>
                <li>Корпоративный спорт</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-background/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@alpha-event.ru</p>
                <p>г. Москва, ул. Спортивная, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Alpha Event. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
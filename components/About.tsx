import Image from 'next/image';
import { Award, Camera, Globe, Users, Palette, BookOpen } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'International Awards',
      description: 'Winner of 5 prestigious photography awards including APA and PDN recognition.',
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Published Work',
      description: 'Featured in Dezeen, Architectural Digest, Dwell, and other leading publications.',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Reach',
      description: 'Projects spanning across North America, Europe, and Asia with international clients.',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Trusted Partner',
      description: 'Collaborated with renowned architects and design firms worldwide.',
    },
  ];

  const philosophy = [
    {
      title: 'Form & Light',
      description: 'Every architectural space tells a story through the interplay of form and light. I capture these narratives.',
    },
    {
      title: 'Timeless Aesthetic',
      description: 'Black and white photography transcends trends, creating timeless visual documents of architectural beauty.',
    },
    {
      title: 'Technical Excellence',
      description: 'Combining artistic vision with technical precision to deliver images that serve both aesthetic and commercial purposes.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-fluid">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/generated/about-feature-1766099401775.png"
                alt="Professional portrait of Sarah Chen with camera equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border border-neutral-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500 mb-1">8+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-900 mb-6">
              About Sarah
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              I'm Sarah Chen, an award-winning architectural photographer with a passion for
              capturing the essence of space through timeless black and white imagery.
              My work has been featured in prestigious design publications and has earned
              international recognition.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              With over 8 years of experience, I specialize in both interior and exterior
              architectural photography, working closely with architects, designers, and
              real estate professionals to create compelling visual narratives that
              highlight the beauty and functionality of architectural spaces.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary">
                Download Portfolio
              </button>
              <button className="btn btn-outline">
                View Exhibitions
              </button>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-bold text-center text-neutral-900 mb-12">
            Recognition & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                  {achievement.title}
                </h4>
                <p className="text-neutral-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-12 lg:p-16 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Artistic Philosophy
            </h3>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              My approach to architectural photography is grounded in three core principles
              that guide every project I undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500 text-neutral-900 rounded-full mb-6">
                  <Palette className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-heading font-semibold mb-4">
                  {item.title}
                </h4>
                <p className="text-neutral-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Exhibition History */}
        <div className="mt-20">
          <h3 className="text-3xl font-heading font-bold text-center text-neutral-900 mb-12">
            Exhibition History
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                { year: '2023', title: 'Modern Spaces: Contemporary Architecture', location: 'Gallery of Architecture, NYC' },
                { year: '2022', title: 'Light & Form: Architectural Photography', location: 'Design Museum, San Francisco' },
                { year: '2021', title: 'Minimalist Visions: Black & White Architecture', location: 'Art Center, Los Angeles' },
              ].map((exhibition, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-neutral-50 rounded-lg">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center font-bold">
                    {exhibition.year}
                  </div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-neutral-900 mb-2">
                      {exhibition.title}
                    </h4>
                    <p className="text-neutral-600">
                      {exhibition.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
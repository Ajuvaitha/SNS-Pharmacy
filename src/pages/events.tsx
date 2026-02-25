
import { PageHeader } from '../components/page-header'

export const EventsPage = () => {
    return `
    ${PageHeader(
        'Events & Celebrations',
        'Witness the vibrant life and professional journey at SNSCPHS',
        '/static/images/pharmacy-events.jpg',
        'Events'
    )}

    <!-- Events Gallery -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Event 1: World Pharmacist Day -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/event-1.jpg" alt="World Pharmacist Day" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">World Pharmacist Day</h3>
                        <p class="text-white/80 text-sm mt-1">Celebrating the vital role of pharmacists in healthcare.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                    </div>
                </div>

                <!-- Event 2: White Coat Ceremony -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/event-2.jpg" alt="White Coat Ceremony" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">White Coat Ceremony</h3>
                        <p class="text-white/80 text-sm mt-1">Welcoming our first-year students to the profession.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">Academic</span>
                    </div>
                </div>

                <!-- Event 3: Innovation Pitch -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/event-3.jpg" alt="Innovation Pitch" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Pharmacy Innovation Pitch</h3>
                        <p class="text-white/80 text-sm mt-1">Students presenting Design Thinking solutions for healthcare.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">iHub</span>
                    </div>
                </div>

                <!-- Event 4: Clinical Training -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/event-4.jpg" alt="Clinical Training" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Clinical Ward Rounds</h3>
                        <p class="text-white/80 text-sm mt-1">Pharm.D students participating in bedside clinical sessions.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">Clinical</span>
                    </div>
                </div>

                <!-- Event 5: Industry Visit -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/event-5.jpg" alt="Industry Visit" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Pharma Industry Visit</h3>
                        <p class="text-white/80 text-sm mt-1">Exploring large-scale manufacturing and quality control.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">Industry</span>
                    </div>
                </div>

                <!-- Event 6: Alumni Meet -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="https://snscphs.org/wp-content/uploads/2023/04/event-6.jpg" alt="Alumni Meet" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Alumni Connect</h3>
                        <p class="text-white/80 text-sm mt-1">Interacting with professionals working in top pharma MNCs.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">Network</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Experience Professional Growth</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join SNSCPHS to be part of an institution that goes beyond textbooks to shape your professional identity.
            </p>
            <a href="/admissions" class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                Apply for Admission 2024-25
            </a>
        </div>
    </section>
    `;
};

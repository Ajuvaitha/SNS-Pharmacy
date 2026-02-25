
import { PageHeader } from '../components/page-header'

export const SuccessStoriesPage = () => {
    return `
    ${PageHeader(
        'Success Stories',
        'Celebrating the professional breakthroughs of SNSCPHS graduates',
        '/static/images/pharmacy-success.jpg',
        'Success Stories'
    )}

    <!-- Filter Pills -->
    <section class="bg-white pb-8 pt-12 text-center border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex flex-wrap justify-center gap-3 md:gap-4" id="story-filters">
                <button data-filter="all" class="filter-btn bg-primary-600 text-white font-semibold py-2.5 px-6 rounded-full shadow-md text-sm transition">All Stories</button>
                <button data-filter="academic" class="filter-btn bg-white border border-gray-200 text-gray-700 hover:text-primary-600 hover:border-primary-300 font-semibold py-2.5 px-6 rounded-full shadow-sm text-sm transition">Academic Excellence</button>
                <button data-filter="sports" class="filter-btn bg-white border border-gray-200 text-gray-700 hover:text-primary-600 hover:border-primary-300 font-semibold py-2.5 px-6 rounded-full shadow-sm text-sm transition">Sports Champions</button>
                <button data-filter="innovation" class="filter-btn bg-white border border-gray-200 text-gray-700 hover:text-primary-600 hover:border-primary-300 font-semibold py-2.5 px-6 rounded-full shadow-sm text-sm transition">Innovation Leaders</button>
                <button data-filter="community" class="filter-btn bg-white border border-gray-200 text-gray-700 hover:text-primary-600 hover:border-primary-300 font-semibold py-2.5 px-6 rounded-full shadow-sm text-sm transition">Community Impact</button>
            </div>
        </div>
    </section>

    <!-- Success Stories Grid -->
    <section class="pb-24 pt-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="stories-grid">
                
                <!-- Card 1 (Academic) -->
                <div class="story-card bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col" data-category="academic">
                    <div class="h-64 bg-gray-200 relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                            <i class="fas fa-image text-5xl"></i>
                        </div>
                        <span class="absolute top-5 left-5 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                            Academic
                        </span>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 leading-snug hover:text-primary-600 transition cursor-pointer">GPAT 2025 All India Rankers</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                            We are immensely proud of our final year B.Pharm students who secured top ranks in the Graduate Pharmacy Aptitude Test (GPAT) 2025, paving their way to premier national research institutes for their postgraduate studies.
                        </p>
                        <div class="mt-auto">
                            <div class="flex items-center text-xs text-gray-500 font-medium mb-4">
                                <i class="far fa-calendar-alt mr-2 text-gray-400 text-sm"></i> February 2026
                            </div>
                            <a href="#" class="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center text-sm group">
                                Read More <i class="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 2 (Innovation) -->
                <div class="story-card bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col" data-category="innovation">
                    <div class="h-64 bg-gray-200 relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                            <i class="fas fa-image text-5xl"></i>
                        </div>
                        <span class="absolute top-5 left-5 bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                            Innovation
                        </span>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 leading-snug hover:text-primary-600 transition cursor-pointer">Best Formulation Design Award at IPC</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                            Our Pharm.D students bagged the 'Best Novel Formulation Design' award at the Indian Pharmaceutical Congress for their groundbreaking research on targeted drug delivery systems using nanotechnology.
                        </p>
                        <div class="mt-auto">
                            <div class="flex items-center text-xs text-gray-500 font-medium mb-4">
                                <i class="far fa-calendar-alt mr-2 text-gray-400 text-sm"></i> January 2026
                            </div>
                            <a href="#" class="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center text-sm group">
                                Read More <i class="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 3 (Community) -->
                <div class="story-card bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col" data-category="community">
                    <div class="h-64 bg-gray-200 relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                            <i class="fas fa-image text-5xl"></i>
                        </div>
                        <span class="absolute top-5 left-5 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                            Community
                        </span>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 leading-snug hover:text-primary-600 transition cursor-pointer">Mega Health & Medication Counseling Camp</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed flex-grow line-clamp-4">
                            Over 500 rural residents benefited from the free health camp organized by our D.Pharm and B.Pharm students. They provided vital medication counseling, blood pressure screening, and distributed essential healthcare kits, demonstrating our commitment to social responsibility.
                        </p>
                        <div class="mt-auto">
                            <div class="flex items-center text-xs text-gray-500 font-medium mb-4">
                                <i class="far fa-calendar-alt mr-2 text-gray-400 text-sm"></i> December 2025
                            </div>
                            <a href="#" class="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center text-sm group">
                                Read More <i class="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Card 4 (Sports) -->
                <div class="story-card bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transform hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col" data-category="sports">
                    <div class="h-64 bg-gray-200 relative">
                        <div class="absolute inset-0 flex items-center justify-center text-gray-400">
                            <i class="fas fa-image text-5xl"></i>
                        </div>
                        <span class="absolute top-5 left-5 bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm uppercase tracking-wide">
                            Sports
                        </span>
                    </div>
                    <div class="p-8 flex-grow flex flex-col">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 leading-snug hover:text-primary-600 transition cursor-pointer">Inter-College Pharmacy Cricket Champions</h3>
                        <p class="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                            The SNSCPHS men's cricket team brought home the trophy at the State Level Inter-Pharmacy Tournament! Their teamwork and dedication on the field reflects the holistic development fostered at our institution.
                        </p>
                        <div class="mt-auto">
                            <div class="flex items-center text-xs text-gray-500 font-medium mb-4">
                                <i class="far fa-calendar-alt mr-2 text-gray-400 text-sm"></i> November 2025
                            </div>
                            <a href="#" class="text-primary-600 font-bold hover:text-primary-700 inline-flex items-center text-sm group">
                                Read More <i class="fas fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Parental Review Example -->
    <section class="py-24 bg-red-50" style="background-color: #fdf5f3;"> <!-- Subtle peach match from screenshot -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">What Parents Say About Us</h2>
            <p class="text-gray-600 mb-12">Hear from the parents who trust SNS Academy with their children's future</p>
            
            <div class="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 relative">
                <div class="flex flex-col items-center">
                    <div class="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3 class="font-bold text-xl text-gray-900">Dr. Vijay Narayan</h3>
                    <p class="text-gray-500 text-sm mb-5">Parent of Grade XII Student</p>
                    
                    <div class="flex text-yellow-500 mb-6 text-sm">
                        <i class="fas fa-star mx-0.5"></i>
                        <i class="fas fa-star mx-0.5"></i>
                        <i class="fas fa-star mx-0.5"></i>
                        <i class="fas fa-star mx-0.5"></i>
                        <i class="fas fa-star mx-0.5"></i>
                    </div>
                    
                    <p class="text-gray-600 italic leading-relaxed text-center mb-6 max-w-2xl mx-auto text-[15px]">
                        "SNS Academy's Stanford pathway program is phenomenal! My son secured admission to IIT thanks to the rigorous preparation and design thinking mindset developed here. The focus on innovation, leadership, and academic excellence truly prepares students for elite universities. Worth every investment!"
                    </p>
                    
                    <div class="inline-flex items-center text-red-500 font-semibold text-sm">
                        <i class="fas fa-check-circle mr-2"></i> Verified Parent Review
                    </div>
                </div>
                
                <!-- Navigation Arrows (visual placeholders for design parity) -->
                <button class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-800 transition md:flex hidden hover:scale-105 active:scale-95">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-800 transition md:flex hidden hover:scale-105 active:scale-95">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
            
            <!-- Carousel Dots -->
            <div class="flex justify-center mt-8 gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            </div>
        </div>
    </section>

    <!-- Write Your Own Success Story Link / CTA -->
    <section class="py-24 bg-white text-center">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Write Your Own Success Story</h2>
            <p class="text-lg text-gray-600 mb-10">
                Join SNS College of Pharmacy and Health Sciences and become part of our legacy of excellence, innovation, and impact!
            </p>
            <a href="/admissions" class="inline-flex items-center justify-center px-10 py-4 bg-[#f97316] text-white font-bold rounded-xl hover:bg-orange-600 transition shadow-lg text-lg transform hover:-translate-y-1">
                <i class="fas fa-edit mr-3"></i> Start Your Journey
            </a>
        </div>
    </section>
    
    <!-- Filtering Logic -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const storyCards = document.querySelectorAll('.story-card');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const activeStateClasses = ['bg-primary-600', 'text-white'];
                    const inactiveStateClasses = ['bg-white', 'border', 'border-gray-200', 'text-gray-700', 'hover:text-primary-600', 'hover:border-primary-300'];
                    
                    // Reset all buttons to inactive state
                    filterBtns.forEach(b => {
                        b.classList.remove(...activeStateClasses);
                        b.classList.add(...inactiveStateClasses);
                    });
                    
                    // Set current button to active state
                    btn.classList.add(...activeStateClasses);
                    btn.classList.remove(...inactiveStateClasses);
                    
                    const filterValue = btn.getAttribute('data-filter');
                    
                    storyCards.forEach(card => {
                        if (filterValue === 'all') {
                            card.style.display = 'flex';
                        } else if (card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
    </script>
    `;
};

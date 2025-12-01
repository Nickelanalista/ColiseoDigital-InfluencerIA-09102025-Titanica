function Guarantee() {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-purple-400 via-purple-300 to-pink-300">
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge with number 7 */}
                <div className="inline-flex items-center justify-center mb-8">
                    <div className="relative">
                        {/* Outer decorative ring */}
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>

                        {/* Main badge */}
                        <div className="relative bg-white w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center shadow-2xl border-8 border-white/50">
                            <span className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-purple-600 to-pink-600 text-transparent bg-clip-text">
                                7
                            </span>
                        </div>

                        {/* Decorative dots around badge */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-2 -left-2 w-5 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    Garantía de 7 días
                </h2>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/95 font-semibold mb-4">
                    No te preocupes, tu compra está completamente libre de riesgo
                </p>

                {/* Description */}
                <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
                    Si en 7 días te das cuenta de que el curso no es para ti, simplemente avísanos y te reembolsaremos el 100% de tu inversión. Sin preguntas ni burocracia.
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Sin Riesgos</h3>
                        <p className="text-white/80 text-sm">100% reembolso garantizado</p>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Proceso Rápido</h3>
                        <p className="text-white/80 text-sm">Respuesta en menos de 24h</p>
                    </div>

                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">Sin Preguntas</h3>
                        <p className="text-white/80 text-sm">Un email es suficiente</p>
                    </div>
                </div>

                {/* CTA Button */}
                <a
                    onClick={() => false}
                    href="https://pay.hotmart.com/X103208920I?checkoutMode=2&off=xa1pls5v"
                    className="hotmart-fb hotmart__button-checkout inline-block bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                >
                    Quiero educar más fácilmente
                </a>

                {/* Trust badge */}
                <p className="mt-6 text-white/80 text-sm">
                    🔒 Compra 100% segura y protegida
                </p>
            </div>
        </section>
    );
}

export default Guarantee;

// ARCHIVO: textos.js
// La Gran Bóveda de la Bibliotheca Magna v5.0 - Versión Íntegra

const canon = [
    { 
        author: "Homero", 
        works: [
            { 
                title: "Ilíada", 
                meta: "Canto I (vv. 1-47)", 
                content: `Μῆνιν ἄειδε, θεά, Πηληϊάδεω Ἀχιλῆος
οὐλομένην, ἣ μυρί’ Ἀχαιοῖς ἄλγε’ ἔθηκε,
πολλὰς δ’ ἰφθίμους ψυχὰς Ἄϊδι προΐαψεν
ἡρώων, αὐτοὺς δὲ ἑλώρια τεῦχε κύνεσσιν
οἰωνοῖσί τε πᾶσι· Διὸς δ’ ἐτελείετο βουλή,
ἐξ οὗ δὴ τὰ πρῶτα διαστήτην ἐρίσαντε
Ἀτρεΐδης τε ἄναξ ἀνδρῶν καὶ δῖος Ἀχιλλεύς.
Τίς τ’ ἄρ σφωε θεῶν ἔριδι ξυνέηκε μάχεσθαι;
Λητοῦς καὶ Διὸς υἱός· ὁ γὰρ βασιλῆϊ χολωθεὶς
νοῦσον ἀνὰ στρατὸν ὦρσε κακήν, ὀλέκοντο δὲ λαοί,
οὕνεκα τὸν Χρύσην ἠτίμασεν ἀρητῆρα
Ἀτρεΐδης· ὃ γὰρ ἦλθε θοὰς ἐπὶ νῆας Ἀχαιῶν
λυσόμενός τε θύγατρα φέρων τ’ ἀπερείσι’ ἄποινα,
στέμματ’ ἔχων ἐν χερσὶν ἑκηβόλου Ἀπόλλωνος
χρυσέῳ ἀνὰ σκήπτρῳ, καὶ λίσσετο πάντας Ἀχαιούς,
Ἀτρεΐδα δὲ μάλista δύω, κοσμήτορε λαῶν·
«Ἀτρεΐδαι τε καὶ ἄλλοι ἐϋκνήμιδες Ἀχαιοί,
ὑμῖν μὲν θεοὶ δοῖεν Ὀλύμπια δώματ’ ἔχοντες
ἐκπέρσαι Πριάμοιο πόλιν, εὖ δ’ οἴκαδ’ ἱκέσθαι·
παῖδα δ’ ἐμοὶ λύσαιτε φίλην, τὰ δ’ ἄποινα δέχεσθαι,
ἁζόμενοι Διὸς υἱὸν ἑκηβόλον Ἀπόλλωνα.»
Ἔνθ’ ἄλλοι μὲν πάντες ἐπευφήμησαν Ἀχαιοὶ
αἰδεῖσθαί θ’ ἱερῆα καὶ ἀγλαὰ δέχθαι ἄποινα·
ἀλλ’ οὐκ Ἀτρεΐδῃ Ἀγαμέμνονι ἥνδανe θυμῷ,
ἀλλὰ κακῶς ἀφίει, κρατερὸν δ’ ἐπὶ μῦθον ἔτελλε·
«Μή σε, γέρον κοίλῃσιν ἐγὼ παρὰ νηυσὶ κιχείω
ἢ νῦν δηθύνοντ’ ἢ ὕστερον αὖτις ἰόντα,
μή νύ τοι οὐ χραίσμῃ σκῆπτρον καὶ στέμμα θεοῖο·
τὴν δ’ ἐγὼ οὐ λύσω· πρίν μιν καὶ γῆρας ἔπεισιν
ἡμετέρῳ ἐνὶ οἴκῳ ἐν Ἄργεϊ, τηλόθι πάτρης,
ἱστὸν ἐποιχομένην καὶ ἐμὸν λέχος ἀντιόωσαν·
ἀλλ’ ἴθι μή μ’ ἐρέθιζε, σαώτερος ὥς κε νέηαι.»
Ὣς ἔφατ’· ἔδεισεν δ’ ὁ γέρων καὶ ἐπείθετο μύθῳ·
βῆ δ’ ἀκέων παρὰ θῖνα πολυφλοίσβοιο θαλάσσης·
πολλὰ δ’ ἔπειτ’ ἀπάνευθε κιὼν ἠρᾶθ’ ὁ γεραιὸς
Ἀπόλλωνι ἄνακτι, τὸν ἠύκομος τέκε Λητώ·
«Κλῦθί μευ, Ἀργυρότοξ’, ὃς Χρύσην ἀμφιβέβηκας
Κίλλάν τε ζαθέην Τενέδοιό τε ἶφι ἀνάσσεις,
Σμινθεῦ, εἴ ποτέ τοι χαρίεντ’ ἐπὶ νηὸν ἔρεψα,
ἢ εἰ δή ποτέ τοι κατὰ πίονα μηρί’ ἔκηα
ταύρων ἠδ’ αἰγῶν, τὸδε μοι κρήηνον ἐέλδωρ·
τίσειαν Δαναοὶ ἐμὰ δάκρυα σοῖσι βέλεσσιν.»
Ὣς ἔφατ’ εὐχόμενος, τοῦ δ’ ἔκλυε Φοῖβος Ἀπόλλων,
βῆ δὲ κατ’ Οὐλύμποιο καρήνων χωόμενος κῆρ,
τόξ’ ὤμοισιν ἔχων ἀμφηρεφέα τε φαρέτρην·`,
                translations: [
                    {
                        lang: "Español",
                        text: "Canta, oh diosa, la cólera del Pelida Aquiles; cólera funesta que causó infinitos males a los aqueos y precipitó al Hades muchas almas valerosas de héroes...",
                        author: "Ed. Gredos (Emilio Crespo)"
                    },
                    {
                        lang: "Français",
                        text: "Chante, déesse, la colère d'Achille, le fils de Pélée ; détestable colère, qui aux Achéens valut des souffrances sans nombre...",
                        author: "Les Belles Lettres (Paul Mazon)"
                    },
                    {
                        lang: "English",
                        text: "The wrath sing, goddess, of Peleus' son, Achilles, that destructive wrath which brought countless woes upon the Achaeans...",
                        author: "Oxford Classical Texts (A.T. Murray)"
                    }
                ],
                exercises: [
                    {
                        pregunta: "¿Qué palabra griega define el tema central en el primer verso?",
                        opciones: ["Theá (Diosa)", "Mênin (Cólera)", "Álgea (Dolores)", "Anax (Rey)"],
                        correcta: 1,
                        explicacion: "La obra comienza con 'Mênin' (μῆνιν), indicando que el tema es la ira de Aquiles."
                    }
                ]
            },
            { 
                title: "Odisea", 
                meta: "Canto I", 
                content: "Ἄνδρα μοι ἔννεπε, μοῦσα, πολύτροπον, ὃς μάλα πολλὰ πλάγχθη...", 
                translations: [
                    { lang: "Español", text: "Cuéntame, Musa, la historia del hombre...", author: "Ed. Gredos" },
                    { lang: "Français", text: "Ô Muse, conte-moi l'aventure de l'Inventif...", author: "Les Belles Lettres" },
                    { lang: "English", text: "Tell me, O muse, of that ingenious hero...", author: "S. Butler" }
                ],
                exercises: [] 
            }
        ]
    },
    { 
        author: "Sófocles", 
        works: [
            { 
                title: "Edipo Rey", 
                meta: "Prólogo", 
                content: `Ὦ τέκνα, Κάδμου τοῦ πάλαι νέα τροφή,
τίνας ποθ’ ἕδρας τάσδε μοι θοάζετε
ἱκτηρίοις κλάδοισιν ἐξεστεμμένοι;`, 
                translations: [
                    { lang: "Español", text: "Oh hijos, descendencia nueva del antiguo Cadmo...", author: "Ed. Gredos" },
                    { lang: "Français", text: "Mes enfants, jeune postérité de l'antique Cadmos...", author: "Les Belles Lettres" },
                    { lang: "English", text: "My children, latest generation born from Cadmus...", author: "F. Storr" }
                ],
                exercises: [
                    {
                        pregunta: "¿A qué héroe fundador se refiere Edipo?",
                        opciones: ["Heracles", "Cadmo", "Teseo", "Jasón"],
                        correcta: 1,
                        explicacion: "Cadmo fue el fundador mítico de Tebas."
                    }
                ]
            }
        ]
    },
    { 
        author: "Platón", 
        works: [
            { 
                title: "Apología de Sócrates", 
                meta: "Exordio", 
                content: "Ὅτι μὲν ὑμεῖς, ὦ ἄνδρες Ἀθηναῖοι, πεπόνθατε ὑπὸ τῶν ἐμῶν κατηγόρων...", 
                translations: [
                    { lang: "Español", text: "Qué es lo que vosotros, atenienses, habéis experimentado...", author: "Ed. Gredos" },
                    { lang: "Français", text: "Quel effet mes accusateurs ont produit...", author: "Les Belles Lettres" },
                    { lang: "English", text: "How you, O Athenians, have been affected...", author: "H.N. Fowler" }
                ],
                exercises: [
                    {
                        pregunta: "¿Qué significa el término 'Apología' en este contexto?",
                        opciones: ["Pedir perdón", "Defensa", "Ataque", "Discurso fúnebre"],
                        correcta: 1,
                        explicacion: "En griego, 'apologia' es una defensa formal ante un tribunal."
                    }
                ]
            }
        ]
    },
    // El resto de autores se mantienen con estructura para ejercicios IA o manuales
    { author: "Hesíodo", works: [{ title: "Teogonía", meta: "Proemio", content: "Μουσάων Ἑλικωνιάδων ἀρχώμεθ᾽ ἀείδειν...", translations: [], exercises: [] }] },
    { author: "Safo", works: [{ title: "Himno a Afrodita", meta: "Fr. 1", content: "Ποικιλόθρον᾽ ἀθάνατ᾽ Ἀφρόδιτα...", translations: [], exercises: [] }] },
    { author: "Heródoto", works: [{ title: "Historias", meta: "Proemio", content: "Ἡροδότου Ἁλικαρνησσέος ἱστορίης ἀπόδεξις ἥδε...", translations: [], exercises: [] }] },
    { author: "Tucídides", works: [{ title: "Guerra del Peloponeso", meta: "Libro I", content: "Θουκυδίδης Ἀθηναῖος ξυνέγραψε...", translations: [], exercises: [] }] },
    { author: "Eurípides", works: [{ title: "Medea", meta: "Prólogo", content: "Εἴθ᾽ ὤφελ᾽ Ἀργοῦς μὴ διαπτάσθαι σκάφος...", translations: [], exercises: [] }] },
    { author: "Aristófanes", works: [{ title: "Lisístrata", meta: "Prólogo", content: "Ἀλλ᾽ εἴ τις ἐς Βακχεῖον αὐτὰς ἐκάλεσεν...", translations: [], exercises: [] }] },
    { author: "Aristóteles", works: [{ title: "Metafísica", meta: "Libro I", content: "Πάντες ἄνθρωποι τοῦ εἰδέναι ὀρέγονται φύσει...", translations: [], exercises: [] }] },
    { author: "Demóstenes", works: [{ title: "Sobre la Corona", meta: "Exordio", content: "Πρῶτον μέν, ὦ ἄνδρες Ἀθηναῖοι, τοῖς θεοῖς εὔχομαι...", translations: [], exercises: [] }] },
    { author: "Píndaro", works: [{ title: "Olímpica I", meta: "Estrofa I", content: "Ἄριστον μὲν ὕδωρ, ὁ δὲ χρυσὸς...", translations: [], exercises: [] }] },
    { author: "Estrabón", works: [{ title: "Geografía", meta: "Libro I", content: "Τῆς τοῦ φιλοσόφου πραγματείας εἶναι νομίζομεν...", translations: [], exercises: [] }] },
    { author: "Marco Aurelio", works: [{ title: "Meditaciones", meta: "Libro II", content: "Ἕωθεν προλέγειν ἑαυτῷ· συντεύξομαι περιέργῳ...", translations: [], exercises: [] }] }
];

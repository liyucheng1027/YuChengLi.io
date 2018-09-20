(function() {
    init();

    function init() {
        smoothScroll.init();

        var wow = new WOW({mobile: false});
        wow.init();

        tagsGenerator();
    }

    function tagsGenerator() {
        var skillsJavascript = ['Javascript', 'AngularJs',  'Express', 'Nodejs', 'vue', 'jquery'],
            skillsPhp = ['PHP', 'MySQL', 'C++', 'JAVA', 'phpUnit', 'Python', 'Ruby', 'JAVA', 'JAVA', 'JAVA'],
            skillsOthers = ['HTML5', 'CSS3', 'less', 'sass', 'git', 'typescript', 'JSON', 'WebPack'],
            colors = ['btn-info', 'btn-success', 'btn-danger', 'btn-primary', 'btn-warning'],
            i = 0;

        $.each(skillsJavasc
            ript, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-1').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsPhp, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-2').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
        $.each(skillsOthers, function(key, value) {
            if (i === 5) {
                i = 0;
            }
            $('.tags.skills-3').append('<div class="tag label  ' + colors[i] + ' lg"><span>' + value + '</span></div>')
            i++;
        });
    }
})();

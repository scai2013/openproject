(function ($) {
    $(function() {
        window.boardTourSteps = [
            {
                'next .board-view-menu-item': I18n.t('js.onboarding.steps.boards.overview'),
                'showSkip': false,
                'nextButton': {text: I18n.t('js.onboarding.buttons.next')},
                onNext: function () {
                    $('.board-view-menu-item ~ .toggler')[0].click();
                    $(".main-menu--children-sub-item:contains('KANBAN')")[0].click();
                }
            },
            {
                'next .board-list--container': I18n.t('js.onboarding.steps.boards.lists'),
                'showSkip': false,
                'nextButton': {text: I18n.t('js.onboarding.buttons.next')},
                'containerClass': '-dark',
                'timeout': function() {
                    return new Promise(function(resolve) {
                        waitForElement('.wp-card', '#content', function() {
                            resolve();
                        });
                    });
                }
            },
            {
                'next .board-list--card-dropdown-button': I18n.t('js.onboarding.steps.boards.add'),
                'showSkip': false,
                'nextButton': {text: I18n.t('js.onboarding.buttons.next')},
            },
            {
                'next .boards-list--container': I18n.t('js.onboarding.steps.boards.drag'),
                'showSkip': false,
                'nextButton': {text: I18n.t('js.onboarding.buttons.next')},
                'containerClass': '-dark -hidden-arrow',
                onNext: function () {
                    $('.main-menu--arrow-left-to-project')[0].click();
                }
            }
        ];
    });
}(jQuery))

from django import forms

class LiqpayPaymentForm(forms.Form):
    version = forms.CharField(widget=forms.HiddenInput())
    public_key = forms.CharField(widget=forms.HiddenInput())
    private_key = forms.CharField(widget=forms.HiddenInput())
    action = forms.CharField(widget=forms.HiddenInput())
    amount = forms.CharField(widget=forms.HiddenInput())
    currency = forms.CharField(widget=forms.HiddenInput())
    description = forms.CharField(widget=forms.HiddenInput())
    order_id = forms.CharField(widget=forms.HiddenInput())
    result_url = forms.CharField(widget=forms.HiddenInput())
    subscribe = forms.CharField(widget=forms.HiddenInput(), required=False)
    subscribe_date_start = forms.CharField(widget=forms.HiddenInput(), required=False)
    subscribe_periodicity = forms.CharField(widget=forms.HiddenInput(), required=False)
